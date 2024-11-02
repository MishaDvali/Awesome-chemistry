import { ElementInterface } from "./Element";
import {elements} from "./Elements"

export const get_element_by_str_repr= (element: string): ElementInterface | undefined  => { 
	if (element.length == 0) 
			return undefined

	if (element[0] == element[0].toLowerCase()) {
		element = element[0].toUpperCase() + element.slice(1);
	}
	for (let i = 1; i < element.length; i += 1) {
		if (element[i] == element[i].toUpperCase()) {
			element = element.slice(0, i) + element[i].toLowerCase() + element.slice(i + 1);
		}
	}
	return elements[element]
}

// console.log(get_element_by_str_repr("H"))
// console.log(get_element_by_str_repr("He"))
// console.log(get_element_by_str_repr("HE"))
// console.log(get_element_by_str_repr("hE"))
