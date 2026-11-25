function makePair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const stringNumberPair = makePair("Hello", 42);
const booleanStringPair = makePair(true, "World");
const numberBooleanPair = makePair(100, false);

const [text, num] = stringNumberPair;
const [flag, message] = booleanStringPair;

console.log(text);
console.log(num);
console.log(flag);
console.log(message);
console.log(numberBooleanPair[0]);
console.log(numberBooleanPair[1]);
console.log(makePair("TypeScript", 2024)[0]);
console.log(makePair(99, "bottles")[1]);
