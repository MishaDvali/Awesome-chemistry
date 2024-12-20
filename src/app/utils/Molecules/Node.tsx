// @ts-nocheck
import {MoleculeClass, InvalidMoleculeError} from "./Molecule"
import EquationExplanation from '../Math/EquationAnimations/Equation';
import { ChemicalElement, get_valence } from '../Elements/Element';			
import ElementNode from "../Elements/Node";

const MoleculeNode: React.FC<{
	molecule_formula: string,
	showValence?: boolean,
	styles_for_valences?: object[]
	valences?: (number | undefined)[]
	styles_for_subscripts?: object[]}> = (props) => {
	
	const stylesForValences = props.styles_for_valences? props.styles_for_valences : []
	const stylesForsubscripts = props.styles_for_subscripts? props.styles_for_subscripts : []


	const molecule = new MoleculeClass(props.molecule_formula)

	let valences = props.valences
	if (props.valences == undefined) {
		valences = []
		for (let i =0;i<molecule.parsed.length;i++) {valences.push(undefined)}
	}

	const elements: JSX.Element[] = []
	let key: number = 0
	for (const [element, sub] of molecule.parsed) {
		elements.push(<ElementNode key={key} element={element} valence={valences[key]} showValence={props.showValence} subScript={sub} valence_style={stylesForValences[key]} subscript_style={stylesForsubscripts[key]}/>)
		key++
	}

	return <div style={{display: "flex", alignItems: "end"}}>
	{elements}
	</div>
}
export default MoleculeNode;
