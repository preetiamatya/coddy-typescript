interface Result<T> {
  success: boolean;
  data: T;
}

const stringResult: Result<string> = {
  success: true,
  data: "Operation completed",
};

const numberResult: Result<number> = {
  success: true,
  data: 42,
};

const booleanResult: Result<boolean> = {
  success: false,
  data: false,
};

const arrayResult: Result<string[]> = {
  success: true,
  data: ["item1", "item2", "item3"],
};

function processResult<T>(result: Result<T>): string {
  return result.success
    ? `Success: ${result.data}`
    : `Failed: ${result.data}`;
}

console.log(processResult(stringResult));
console.log(processResult(numberResult));
console.log(processResult(booleanResult));
console.log(processResult(arrayResult));
console.log(stringResult.data);
