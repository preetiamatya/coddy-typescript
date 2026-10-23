// Create the sumAll function with rest parameters
function sumAll(...numbers: number[]): number {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

// Create the findMaximum function with rest parameters
function findMaximum(...numbers: number[]): number {
    let temp: number = 0;
    for (const num of numbers) {
        if (num > temp) {
            temp = num;
        }
    }
    return temp;
}

// Create the concatenateStrings function with separator and rest parameters
function concatenateStrings(separator: string, ...fruits: string[]): string {
    let concatstring: string = "";
    for (const fruit of fruits) {
        concatstring = fruits.join(separator)
    }
    return concatstring
}

// Test the functions and print results
console.log(sumAll(5, 10, 15));
console.log(sumAll(1, 2, 3, 4, 5));
console.log(findMaximum(8, 3, 12, 7));
console.log(findMaximum(25, 18));
console.log(concatenateStrings("-", "apple", "banana", "cherry"));
console.log(concatenateStrings(" | ", "red", "green", "blue", "yellow"));