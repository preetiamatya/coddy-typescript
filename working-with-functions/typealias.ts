// StringProcessor, NumberCalculator, BooleanChecker
type StringProcessor = (a: string) => string;
type NumberCalculator = (a: number, b: number) => number
type BooleanChecker = (a: string) => boolean

// toUpperCase, addPrefix, divide, power, isEmpty, startsWithA
const toUpperCase: StringProcessor = (a) => {
  return a.toUpperCase();
};

const addPrefix: StringProcessor = (a) => {
  return "Processed: " + a;
};

const divide: NumberCalculator = (a, b) => {
    return a/b;
}

const power: NumberCalculator = (a, b) => {
    return Math.pow(a,b);
}

const isEmpty: BooleanChecker = (a) => {
    return !a.length;
}
const startsWithA: BooleanChecker = (a) => {
    return a.startsWith("A");
}

// TODO: Test your functions and print the results
// Call each function with the specified values and print the results
console.log(toUpperCase("hello world"));
console.log(addPrefix("data"));
console.log(divide(20,4));
console.log(power(3,4));
console.log(isEmpty(""));
console.log(startsWithA("Apple"));