// Create type aliases for HasName, HasAge, HasEmail
type HasName = { name: string };
type HasAge = { age: number };

// Create Person and Employee types using intersection
// Person now has both name AND age properties
type Person = HasName & HasAge;

type HasEmail = { email: string };

type Employee = HasName & HasAge & HasEmail;


let user: Person = {
    name: "Alice",
    age: 25
};

let worker: Employee = {
    name: "Bob",
    age: 30,
    email: "bob@company.com"
};

// Create variables user and worker
// Create displayPerson and displayEmployee functions
function displayPerson(person: Person): string {
    return `Name: ${person.name}, Age: ${person.age}`;
}

function displayEmployee(employee: Employee): string {
    return `Name: ${employee.name}, Age: ${employee.age}, Email: ${employee.email}`;
}

// Call the functions and print the results
console.log(displayPerson(user));
console.log(displayEmployee(worker));