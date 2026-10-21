// Create the userInput variable with unknown type
let userInput: unknown = "TypeScript";

// Use typeof to check if userInput is a string
if (typeof (userInput) == "string") {
    console.log(userInput.toUpperCase())
}
else {
    console.log("Not a string")
}
// If it's a string, print the uppercase version
// If it's not   string, print "Not a string"