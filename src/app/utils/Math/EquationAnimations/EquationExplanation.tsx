"use client";
import { solve_with_steps, Step } from "../Equations/solve_equation";
import "./styles.scss"
import React, { useMemo, useRef, useState } from 'react';


const EquationAnimation: React.FC<{step: Step}> = (props) => {

	const [toRemoveClassName, setToRemoveClassName] = useState("")
	const [toAddClassName, setToAddClassName] = useState("hidden")

	const step = props.step
	const leftStaticPart = step.startEquation.slice(0, step.removedFrom)
	const removable = step.startEquation.slice(step.removedFrom, step.removedTo);
	const middleStaticPart = step.startEquation.slice(step.removedTo,
																		step.addedTo + (step.removedTo - step.removedFrom));
	const addedPart = step.added;
	const rightStaticPart = step.startEquation.slice(step.addedTo + (step.removedTo - step.removedFrom) + step.added.length);

	function handleAnimation() {
		setToRemoveClassName("removable")
		setToAddClassName("addition")
		setTimeout(() => {setToRemoveClassName("hidden")}, 1900)
		setTimeout(() => {setToAddClassName("hidden"); setToRemoveClassName("")}, 4000)
	}

	return (<>
		<div className="equation">
		<span>{leftStaticPart}</span>
		<span className={toRemoveClassName}>{"\u00A0"}{removable}</span>
		<span>{middleStaticPart}</span>
		<span className={toAddClassName}>{"\u00A0"}{addedPart}</span>
		</div>
		<div className="inBetweenEquations"><button onClick={handleAnimation} className="explainButton"> Пояснити перетворення</button></div>
	</>);
}
export default EquationAnimation;
