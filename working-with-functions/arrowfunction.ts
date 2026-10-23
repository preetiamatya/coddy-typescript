//  Convert the regular function to arrow function and create the additional arrow functions
// Create the subtract arrow function with type annotations
const subtract = (a: number, b: number): number => {
    return a - b
}

// Create the createMessage arrow function with type annotations
const createMessage = (text: string): string => `Message: ${text}`;

// Create the isPositive arrow function with type annotations
const isPositive = (num: number): boolean => {
    if (num > 0) {
        return true
    }
    return false
}

// Test your arrow functions and print the results
console.log(subtract(10, 3))
console.log(createMessage("Hello World"))
console.log(isPositive(-5))
console.log(isPositive(8))
