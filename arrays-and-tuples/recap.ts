
// Create the addToShoppingList function that takes a tuple and array as parameters
function addToShoppingList(name: [string, number], currentList: string[]): string[] {
    let [item, quantity] = name;
    let newquantity: string[] = [...currentList, item]
    return newquantity;
}

// Test data
const groceryItem: [string, number] = ["apples", 5]
const currentList: string[] = ["bread", "milk", "eggs"]

let updatedList: string[] = addToShoppingList(groceryItem, currentList)
console.log(updatedList)

// Second test
const bakeryItem: [string, number] = ["cookies", 2]
let finalList: string[] = addToShoppingList(bakeryItem, updatedList)
console.log(finalList)
