// Create the getStringLength function that accepts string | null and returns number

// Test the function with the required values and print results

function getStringLength(text: string | null): number {
    if (text === null) {
        return 0
    }

    return text.length
}

console.log(getStringLength("Hello TypeScript"))
console.log(getStringLength(null))
console.log(getStringLength("TS"))