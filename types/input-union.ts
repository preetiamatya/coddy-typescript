import * as fs from "fs";

// Read inputs
const stdinBuffer: Buffer = fs.readFileSync(0);
const inputs: string[] = stdinBuffer.toString().trim().split('\n');
const firstInput = inputs[0];
const secondInput = inputs[1];

// Create the processData function with type guard
function processData(input: string | string[]): void {
    if (Array.isArray(input)) {
        console.log(input.reduce((sum, s) => sum + s.length, 0));
    }
    else {
        console.log(input.length);
    }
}

// Create the formatMessage function with type guard
function formatMessage(content: number | boolean): void {
    if (typeof content === "number") {
        // TypeScript knows input is a number here
        console.log(`Value: ${content}`);
    } else {
        // TypeScript knows input is boolean here
        console.log(`Status: ${content}`);
    }
}

function convert(value: string): number | boolean {
    if (value === "true") return true;
    if (value === "false") return false;

    const num = Number(value);

    if (value.trim() !== "" && Number.isFinite(num)) {
        return num;
    }
    return NaN;
}

function parseInput(input: string): string | string[] {
    if (!input.startsWith("[")) {
        return input;
    }

    const parsed: unknown = JSON.parse(input);

    if (!Array.isArray(parsed) || !parsed.every(item => typeof item === "string")) {
        throw new Error("Expected a JSON array of strings");
    }
    return parsed;
}

let parsedFirstinput = parseInput(firstInput);
processData(parsedFirstinput)
let parsedSecondinput = convert(secondInput);
formatMessage(parsedSecondinput)

