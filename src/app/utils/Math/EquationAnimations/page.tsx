import React from 'react';
import EquationAnimation from './EquationExplanation';
import { solve_with_steps, SolvedEquation } from '../Equations/solve_equation';
import EquationExplanation from './Equation';


const AnimatedPage: React.FC = () => {
	const solved_equation: SolvedEquation = solve_with_steps("x * 4 = 12 * 2");
  return <>
	<EquationExplanation equation="6 * 2 = x * 4">Custom node</EquationExplanation>
	</>;
}
export default AnimatedPage;
