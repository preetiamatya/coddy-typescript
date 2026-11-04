import * as fs from "fs";

// Read inputs
const stdinBuffer: Buffer = fs.readFileSync(0);
const inputs: string[] = stdinBuffer.toString().trim().split('\n');
const input1 = inputs[0];
const input2 = inputs[1];
const input3 = inputs[2];

// Convert inputs to appropriate types
const firstInput = isNaN(Number(input1)) ? input1 : Number(input1);
const secondInput = input2 === "true" ? true : input2 === "false" ? false : input2;
const thirdInput = isNaN(Number(input3)) ? input3 : Number(input3);

// Create the three functions: printId, processValue, and formatOutput
function printId(id: string | number): void {
  console.log(id);
}

function processValue(data: boolean | string): void {
  console.log(data);
}

function formatOutput(input: number | string): number | string {
  if (typeof input === "number") {
    return `Number: ${input}`; // TypeScript knows this is a number
  }

  return `Text: ${input}`; // TypeScript knows this is a string
}
printId(firstInput);  // Works with string
processValue(secondInput);       // Works with number
console.log(formatOutput(thirdInput));

