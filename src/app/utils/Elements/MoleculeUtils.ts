import { ChemicalElement } from "./Element";

export const valence = (element: ChemicalElement): number | undefined => { 
	if (element.group == 1) {
		return 1;
	} 
	if (element.group == 2) {
		return 2;
	}
	if (element.group == 13) {
		return 3;
	}
}
