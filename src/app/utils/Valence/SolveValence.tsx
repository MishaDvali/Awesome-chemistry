import {MoleculeClass, InvalidMoleculeError} from "../Molecules/Molecule"
import EquationExplanation from '../Math/EquationAnimations/Equation';
import { ChemicalElement, get_valence } from '../Elements/Element';			

const SolveValence: React.FC<{molecule_formula: string}> = (props) => {
	const molecule = new MoleculeClass(props.molecule_formula)
	const valence = (element: ChemicalElement): number|string => {const v = get_valence(element); return v? v : "x"}; 
	if (molecule.parsed.length != 2) {
		throw new InvalidMoleculeError("Too long to easily calculate")
	}

	const equation = (valence(molecule.parsed[0][0]) +
										" * " +
										molecule.parsed[0][1] +
										" = " +
										valence(molecule.parsed[1][0]) +
										" * " +
										molecule.parsed[1][1])
  return <EquationExplanation equation={equation}>{molecule.str_rep}</EquationExplanation>;
}
export default SolveValence;
