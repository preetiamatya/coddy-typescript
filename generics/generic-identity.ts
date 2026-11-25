function wrapInObject<T>(item: T): { value: T } {
  return { value: item };
}

const wrappedString = wrapInObject("Hello TypeScript");
const wrappedNumber = wrapInObject(42);
const wrappedBoolean = wrapInObject(true);

console.log(wrappedString.value);
console.log(wrappedNumber.value);
console.log(wrappedBoolean.value);
console.log(wrapInObject("Generic").value);
console.log(wrapInObject(100).value);