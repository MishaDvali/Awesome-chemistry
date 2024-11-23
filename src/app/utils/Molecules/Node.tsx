
import {MoleculeClass, InvalidMoleculeError} from "./Molecule"
import EquationExplanation from '../Math/EquationAnimations/Equation';
import { ChemicalElement, get_valence } from '../Elements/Element';			
import ElementNode from "../Elements/Node";

const MoleculeNode: React.FC<{molecule_formula: string, showValence?: boolean}> = (props) => {
	const molecule = new MoleculeClass(props.molecule_formula)

	const elements: JSX.Element[] = []
	let key: number = 0
	for (const [element, sub] of molecule.parsed) {
		elements.push(<ElementNode key={key} element={element} showValence={props.showValence} subScript={sub}/>)
		key++
	}

	return <div style={{display: "flex", alignItems: "end"}}>
	{elements}
	</div>
}
export default MoleculeNode;
