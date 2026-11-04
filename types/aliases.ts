// Create type aliases for UserID, Priority, and Status
type UserID = string | number;
type Priority = string | boolean;
type Status = string;
// Then declare the variables and assign the specified values
let currentUser: UserID = "admin123";
let guestUser: UserID = 42;
let taskPriority: Priority = "high";
let isUrgent: Priority = true;
let orderStatus: Status = "pending";
// Print each variable's value

console.log(currentUser);
console.log(guestUser);
console.log(taskPriority);
console.log(isUrgent);
console.log(orderStatus);
