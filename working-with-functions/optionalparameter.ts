// Create the createUserProfile function with proper type annotations
function createUserProfile(username: string, displayName?: string) {
    if (displayName) {
        return "Profile: " + displayName + ` (@${username})`
    }
    return "Profile: " + `@${username}`
}
// Create the calculateDiscount function with proper type annotations
function calculateDiscount(price: number, membershipLevel?: string) {
    if (membershipLevel) {
        return .9 * price;
    }
    return price
}

// Test the functions and print the results
console.log(createUserProfile("john_doe", "John Doe"))
console.log(createUserProfile("jane_smith"))
console.log(calculateDiscount(100, "premium"))
console.log(calculateDiscount(75))