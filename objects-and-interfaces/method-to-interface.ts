// Create the Calculator interface with the required properties and methods
interface Calculator {
    brand: string;
    model: string;
    isScientific: boolean;
    add(firstNumber: number, secondNumber: number): number;
    getInfo(): string;
}

// Create the BankAccount interface with the required properties and methods
interface BankAccount {
    accountNumber: string;
    balance: number;
    isActive: boolean;
    deposit(firstNumber: number): void;
    getBalance(): number;
}

// Create the myCalculator variable of type Calculator
const myCalculator: Calculator = {
    brand: "Casio",
    model: "FX-991EX",
    isScientific: true,
    add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    },
    getInfo() {
        return `${this.brand} ${this.model}`;
    },
};

// Create the savingsAccount variable of type BankAccount
const savingsAccount: BankAccount = {
    accountNumber: "SAV-12345",
    balance: 1500,
    isActive: true,
    deposit(amount) {
        this.balance += amount;
    },
    getBalance() {
        return this.balance;
    },
};

// Print all the required outputs
console.log(myCalculator.getInfo());
console.log(myCalculator.add(15, 27));
console.log(savingsAccount.getBalance());
savingsAccount.deposit(250);
console.log(savingsAccount.getBalance());
console.log(myCalculator.isScientific);
