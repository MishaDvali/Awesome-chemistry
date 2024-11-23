const romanToNumber: Record<string, number> = {
	"I": 1,
	"II": 2,
	"III": 3,
	"IV": 4,
	"V": 5,
	"VI": 6,
	"VII": 7,
	"VIII": 8,
	"IX": 9,
	"X": 10,
}

const numberToRoman: Record<number, string> = {}
for (const [roman, num] of Object.entries(romanToNumber)) {
	numberToRoman[num] = roman;
}

export {romanToNumber as RomanToNumber, numberToRoman as number_to_roman}
