import { forEach } from "mathjs";
import { solve_with_steps, Step } from "../Equations/solve_equation";
import "./styles.scss"
import React, { ReactNode, useMemo, useRef, useState } from 'react';
import EquationAnimation from "./EquationExplanation";


const EquationExplanation: React.FC<{equation: string, children: ReactNode}> = (props) => {

	const solved = useMemo(() => solve_with_steps(props.equation), [])

	function get_all_equations(steps) {
		return steps.map((step: Step)=><EquationAnimation step={step}/>)
	}

	const equations = useMemo(() => get_all_equations(solved.steps), [])

	return (
		<div className="solvedEquation">
			{props.children != undefined && <>{props.children}<br/></>}
			{solved.steps[0].startEquation}<br/>
			x = {solved.ans}
			<div className="steps">
			<h5 style={{marginBottom: "10px"}}> Рішення рівняння: </h5>

			{...equations}<br/>
			x = {solved.ans}
			</div>
		</div>
	);
}
export default EquationExplanation;
