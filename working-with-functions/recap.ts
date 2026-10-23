import * as fs from "fs";

// Read inputs
const stdinBuffer: Buffer = fs.readFileSync(0);
const inputs: string[] = stdinBuffer.toString().trim().split('\n');
const firstName: string = inputs[0];
const lastName: string = inputs[1];
const middleName: string = inputs[2];

// Create the formatName function with proper type annotations
type StringProcessor = (firstName: string, lastName: string, middleName?: string) => string;
const formatName: StringProcessor = (firstName, lastName, middleName) => {
    if (middleName) {
        return `${firstName} ${middleName} ${lastName}`;
    }
    return `${firstName} ${lastName}`;
};
// Call the function and output the result
// Remember to handle the case where middleName is an empty string
// console.log(formatName("John", "Doe"));
console.log(formatName(firstName, lastName, middleName));