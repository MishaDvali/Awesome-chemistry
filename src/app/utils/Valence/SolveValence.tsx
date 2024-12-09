// @ts-nocheck
import {MoleculeClass, InvalidMoleculeError} from "../Molecules/Molecule"
import EquationExplanation from '../Math/EquationAnimations/Equation';
import { ChemicalElement, get_valence } from '../Elements/Element';			
import MoleculeNode from "../Molecules/Node";

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

	const beautifulEquation = <div style={{display: "inline"}}>
	<span style={{color: "#888800"}}>{valence(molecule.parsed[0][0])}</span>
	{" * "}
	<span style={{color: "#00ff00"}}>{molecule.parsed[0][1]}</span>
	{" = "}
	<span style={{color: "#0000ff"}}>{valence(molecule.parsed[1][0])}</span>
	{" * "}
	<span style={{color: "#ff0000"}}>{molecule.parsed[1][1]}</span></div>
  return <>
	<EquationExplanation equation={equation}>
	<MoleculeNode 
	molecule_formula={props.molecule_formula} 
	showValence={true}
	styles_for_subscripts={[{color: "#00ff00"}, {color: "#ff0000"}]}
	styles_for_valences={[{color: "#888800"}, {color: "0000ff"}]}
	/>
	<br/>
	{beautifulEquation}
	</EquationExplanation>
	</>;
}
export default SolveValence;
