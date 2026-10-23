// Create the add function with explicit return type annotation
function add(firstnumber: number, secondnumber: number): number {
    return firstnumber + secondnumber;
}
// Create the getFullName function with explicit return type annotation
function getFullName(firstname: string, lastname: string): string {
    return firstname + " " + lastname;
}
// Create the isEligible function with explicit return type annotation
function isEligible(age: number, hasLicense: boolean): boolean {
    if (age > 18) {
        return true;
    }
    return false;
}

// Test the functions and print the results
// Call add with 15 and 27
console.log(add(15, 27))
// Call getFullName with "John" and "Smith"
console.log(getFullName("John", "Smith"))
// Call isEligible with 20 and true
console.log(isEligible(20, true))
// Call isEligible with 16 and true
console.log(isEligible(16, false))
