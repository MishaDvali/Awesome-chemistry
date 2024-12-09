// @ts-nocheck
import React from "react"
import {MoleculeClass, InvalidMoleculeError} from "../Molecules/Molecule"
import EquationExplanation from '../Math/EquationAnimations/Equation';
import { ChemicalElement, get_valence } from './Element';			
import { get_element_by_str_repr } from "./Parser";
import { number_to_roman } from "../Math/Romanic_numbers/romanic_numbers";

const ElementNode: React.FC<{
	element: string | ChemicalElement,
	subScript?: number,
	showValence?: boolean,
	valence?: number | string,
	valence_style?: object,
	subscript_style?: object
}> = (props) => {

	// const showValennce = props.showValence? props.showValence : false
	let valence = props.valence

	let valenceStyle = {alignSelf: "center", fontSize:"1rem"}
	if (props.valence_style != undefined) {
		valenceStyle = {...valenceStyle, ...props.valence_style}
	}

	
	const element_object = ((element: ChemicalElement | string): ChemicalElement => {
		if (typeof props.element != "string") { return props.element}
		const elementObjectAndError: [ChemicalElement, number] | undefined = get_element_by_str_repr(element)
		if (elementObjectAndError == undefined) {
			throw new Error(props.element + " is not a valid element!")
		}
		return elementObjectAndError[0]
	})(props.element)

	const elementStrRepr = element_object.symbol;

	if (props.showValence) {
		if (props.valence==undefined) {
		const newValence = get_valence(element_object)
		valence = newValence? number_to_roman[newValence] : "?"
		} else {
		valence = number_to_roman[valence]
		}
	}
	
	return <div style={{width: "adjust"}}>
		{(props.showValence || props.valence) && <div style={valenceStyle}>{valence}</div>}
		<div style={{display: "inline", width: "adjust"}}>
		{elementStrRepr}
		{props.subscript_style!=undefined && <sub style={props.subscript_style}>{props.subScript && props.subScript != 1 && props.subScript}</sub>}
		{props.subscript_style==undefined && <sub>{props.subScript && props.subScript != 1 && props.subScript}</sub>}
		</div>
	</div>
}
export default ElementNode;
