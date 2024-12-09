// @ts-nocheck
import { equal } from "assert"
import {MathNode, parse, simplify} from "mathjs"

export interface Step {
	startEquation: string
	removedFrom: number 
	removedTo: number
	addedTo: number
	added: string
	endEquation: string
}

export interface SolvedEquation {
	steps: Step[]
	ans: number | undefined
}

const reveresed_operatros_table = {
	"*" : "/",
	"/" : "*",
	"+" : "-",
	"-" : "+"
}

function reverse_operator(operator: string): string {
	return 	reveresed_operatros_table[operator]
}

function simplify_right_part(equation: string): Step | undefined {
	let [leftStr, rightStr] = equation.split("=");
  let right = parse(rightStr.trim());

	//try to simplify the right part if possible
	// TODO to add trying to simplify the left part if possible
	const rightPartSimplified = simplify(right)
	if (rightPartSimplified.toString() != rightStr) {
		let [removedFrom, removedTo] = [ equation.indexOf("=") + 1, equation.length]
		return {
			startEquation: equation,
			removedFrom: removedFrom,
			removedTo: removedTo,
			addedTo: removedFrom,
			added: rightPartSimplified.toString(),
			endEquation: leftStr + "= " + rightPartSimplified.toString()
		}
	}
}

function move_from_left_part_to_the_right(equation: string): Step {
	let [leftStr, rightStr] = equation.split("=");
  let left: MathNode = parse(leftStr.trim());

	const reversed_operator = reverse_operator(left.op);
	const args = left.args;

	const startEquation: string = equation;
	let removed_from: number 
	let removed_to: number 

	let to_move_to_the_right: string;
	// TODO to fix critical bug if "x + (4 * 2)" cause none of this is a number, parse to see if all are constants
	if (!isNaN(Number(args[0].toString()))) {
		leftStr = args[1].toString()
		to_move_to_the_right = args[0].toString()
		removed_from = 0
		removed_to = to_move_to_the_right.length + 1
	} else if (!isNaN(Number(args[1].toString()))) {
		leftStr = args[0].toString()
		to_move_to_the_right = args[1].toString()
		removed_from = leftStr.length 
		removed_to = startEquation.indexOf("=")
	} else {
		throw new Error("Could not solve the equation")
	}

	const add_to_the_right_part =  " " + reversed_operator + " " + to_move_to_the_right 
	const end_equation = leftStr + " = " + rightStr + add_to_the_right_part

	return {
		startEquation: startEquation,
		removedFrom: removed_from,
		removedTo: removed_to,
		addedTo: startEquation.length,
		added: add_to_the_right_part,
		endEquation: end_equation
	}

}
export function solve_with_steps(equation: string): SolvedEquation {
	let steps: Step[] = []

	if (equation.indexOf("x") > equation.indexOf("=")) {
		const swapped_equation = 
			equation.slice(equation.indexOf("=") + 2, equation.length) + 
			" = " + 
			equation.slice(0, equation.indexOf("=") - 1)
		steps.push({
			startEquation: equation,
			removedFrom: 0,
			removedTo: equation.length,
			addedTo: 1,
			added: swapped_equation,
			endEquation: swapped_equation
		})
		equation = swapped_equation
	}

	let leftStr = equation.split("=")[0];
  let left = parse(leftStr.trim());

	let step = simplify_right_part(equation)
	if (step != undefined) {
		steps.push(step)
		equation = step.endEquation
	}

	// Move constants from left to right
	while (left.toString() != "x") {
		const step_move_from_left_to_right = move_from_left_part_to_the_right(equation)	
		steps.push(step_move_from_left_to_right)
		equation = step_move_from_left_to_right.endEquation
		
		const step_simplify_right = simplify_right_part(equation)
		if (step_simplify_right == undefined) {throw Error("Could not simplify the right part")}
		steps.push(step_simplify_right)

		equation = step_simplify_right.endEquation
		left = parse(equation.split("=")[0].trim());
	}	

	return {
		steps: steps,
		ans: Number(parse(equation.split("=")[1].trim()))
	}

}

// console.log(solve_with_steps("12 * 2 = x * 4"))
