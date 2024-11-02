import { isNumber } from "util";
import { ChemicalElement } from "../Elements/Element";
import { get_element_by_str_repr } from "../Elements/Parser";

class InvalidMoleculeError extends Error {
	constructor (message: string) {
		super(message)
		this.name = "InvalidMoleculeError"
	}
}

class Molecule {
	str_rep: string;
	parsed: [(ChemicalElement | Molecule), number][];

	_valence: number | undefined

	constructor (str_rep: string, valence=undefined) {
		this.str_rep = str_rep;
		this.parsed = ParseMolecule(str_rep)
		this._valence = valence
	}


	get_valece (): number | undefined {
		if (this._valence !== undefined) {
			return this._valence;
		}
		return this.CalcVal()
	}

	CalcVal (): undefined | number {
		throw Error("Not implemented") //TODO
	}
}

function ParseMolecule (repr: string): [(ChemicalElement | Molecule), number][] {
	if (repr.length == 0) {
		return []
	}

	for (let i = 0; i < repr.length; i++) {
		if (repr[i] == "(") {
			const opening_bracket = i;
			let closingBracket = opening_bracket + 1
			for (;repr[closingBracket] != ")";closingBracket++) {}
			const molecule = new Molecule(repr.slice(opening_bracket+1, closingBracket))

			const start_of_the_number = closingBracket + 1;
			let end_of_the_number = start_of_the_number + 1;

			for (;!isNaN(Number(repr[end_of_the_number]));end_of_the_number++) {}
			const elements_before_brackets = ParseMoleculePlainElements(repr.slice(0, opening_bracket)).map((element) => [element, 1] as [ChemicalElement, number])
			const elements: [ChemicalElement | Molecule, number][] = [...elements_before_brackets ]
			if (!isNaN(Number(repr[start_of_the_number]))) {
				elements.push([molecule, Number(repr.slice(start_of_the_number, end_of_the_number))])
			} else {
				elements.push([molecule, 1])
			}
			return elements
		}

		if (!isNaN(Number(repr[i]))) {
			const start_of_the_number = i;
			let end_of_the_number = i
			for (;!isNaN(Number(repr[end_of_the_number]));end_of_the_number++) {}
			let elements_before_number = ParseMoleculePlainElements(repr.slice(0, start_of_the_number))
			let elements = elements_before_number.map((element) => [element, 1] as [ChemicalElement, number])
			elements[elements.length - 1][1] = Number(repr.slice(start_of_the_number, end_of_the_number))
			return [...elements, ...ParseMolecule(repr.slice(end_of_the_number))]
		}
	}
	return ParseMoleculePlainElements(repr).map((element) => [element, 1] as [ChemicalElement, number])
}

// console.log(ParseMolecule("H2"))
// console.log(ParseMolecule("h2o"))
// console.log(ParseMolecule("C2H5OH"))
// console.log(ParseMolecule("Ag(NO3)2"))
// console.log(ParseMolecule("(NO3)"))


function ParseMoleculePlainElements (repr: string): (ChemicalElement | Molecule)[] {
	if (repr.length === 0) {return []}
	if (repr.length === 1) {
		const possibly_element = get_element_by_str_repr(repr[0]);
		if (possibly_element === undefined) { throw new InvalidMoleculeError("Can't parse molecule " + repr[0])}
		return [possibly_element[0]]
	}
	const possibly_element_of_two_first_letters = get_element_by_str_repr(repr.slice(0, 2))
	if (possibly_element_of_two_first_letters === undefined) {
		const possibly_element_of_first_letter = get_element_by_str_repr(repr[0]) 
		
		if (possibly_element_of_first_letter === undefined) {
			throw new InvalidMoleculeError("Can't parse this letters as elements: " + repr[0] + ", " + repr.slice(0, 2))
		}
		
		return [possibly_element_of_first_letter[0], ...ParseMoleculePlainElements(repr.slice(1))]
	}


	const [element_of_two_first_letters, errors_of_two_first_letters] = possibly_element_of_two_first_letters
	if (errors_of_two_first_letters === 0) { return [element_of_two_first_letters, ...ParseMoleculePlainElements(repr.slice(2))]}

	const possibly_element_of_first_letter = get_element_by_str_repr(repr[0])
	if (possibly_element_of_first_letter == undefined) { return [element_of_two_first_letters, ...ParseMoleculePlainElements(repr.slice(2))]}

	const possibly_element_of_second_letter = get_element_by_str_repr(repr[1])
	if (repr.length === 2) {
		if (possibly_element_of_second_letter === undefined) { return [element_of_two_first_letters, ...ParseMoleculePlainElements(repr.slice(2))]}
		return [element_of_two_first_letters]
	}

	const possibly_element_of_second_and_third_letters = get_element_by_str_repr(repr.slice(1, 3))
	if (possibly_element_of_second_and_third_letters === undefined) {
		if (possibly_element_of_second_letter === undefined) { return [element_of_two_first_letters, ...ParseMoleculePlainElements(repr.slice(2))]}
		return [element_of_two_first_letters]
	}

	const [element_of_first_element, errors_in_first_element] = possibly_element_of_first_letter
	const [element_of_second_and_third_letters, errors_in_second_and_third_element] = possibly_element_of_second_and_third_letters
	
	if (errors_of_two_first_letters > errors_in_second_and_third_element) {
		return [element_of_first_element, element_of_second_and_third_letters, ...ParseMoleculePlainElements(repr.slice(3))]
	}
	try {
		return [element_of_two_first_letters, ...ParseMoleculePlainElements(repr.slice(2))]
	} catch (InvalidMoleculeError) {
		try {
			return [element_of_first_element, element_of_second_and_third_letters, ...ParseMoleculePlainElements(repr.slice(3))]
		} catch (InvalidMoleculeError) {
			// Nothing I can do, just return the previous error 
			return [element_of_two_first_letters, ...ParseMoleculePlainElements(repr.slice(2))]
		}
	}
}

// console.log(ParseMoleculePlainElements("H"))
// console.log(ParseMoleculePlainElements("He"))
// 
// console.log(ParseMoleculePlainElements("HeH"))
// console.log(ParseMoleculePlainElements("Heh"))
// console.log(ParseMoleculePlainElements("heh"))
// console.log(ParseMoleculePlainElements("NAg"))
// console.log(ParseMoleculePlainElements("nAg"))
// console.log(ParseMoleculePlainElements("nAG"))
// console.log(ParseMoleculePlainElements("nag"))
// console.log(ParseMoleculePlainElements("naG"))
//
// console.log(ParseMoleculePlainElements("naag"))
// console.log(ParseMoleculePlainElements("nAaG"))
// console.log(ParseMoleculePlainElements("naaG"))
// console.log(ParseMoleculePlainElements("ccAaGcAg"))
// console.log(ParseMoleculePlainElements("ccAaGcaG"))
// console.log(ParseMoleculePlainElements("CcAaGcaG"))


