export interface ChemicalElement {
	symbol: string | undefined
	group: number | undefined
	period: number | undefined
}

export const get_valence = (element: ChemicalElement): number | undefined => {
	if (element.group == 1 || element.group == 2) {
		return element.group
	}
	if (element.group == 13) {
		return 3
	}
	return undefined
}
