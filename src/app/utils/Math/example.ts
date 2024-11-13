const math = require("mathjs")

export default function log_parsed(eq: string): void {
	const [left, right] = eq.split("=");
  const leftParsed = math.parse(left.trim());
  const rightParsed = math.parse(right.trim());

  console.log("Left Side Parsed:", leftParsed);
  console.log("Right Side Parsed:", rightParsed);

	try {
		const leftSideSimplified = math.simplify(leftParsed)
		console.log("Left side simplified: ", leftSideSimplified)
	} catch {
		console.log("Can't simplify the left part")
	}
	try {
		const rightSideSimplified = math.simplify(rightParsed)
		console.log("Right side smplified: ", rightSideSimplified)
	} catch {
		console.log("Can't simplify the left part")
	}
}

log_parsed("x * 6 = 3 * 4 ")
