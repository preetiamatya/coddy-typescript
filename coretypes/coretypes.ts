// Create the getTypeInfo function that takes a parameter of type any and returns a string
function getTypeInfo(test: any) {
    return (typeof test)
}
// Test the function with the required values and print each result
console.log(getTypeInfo("Hello"))
console.log(getTypeInfo(42))
console.log(getTypeInfo(true))
console.log(getTypeInfo(null))