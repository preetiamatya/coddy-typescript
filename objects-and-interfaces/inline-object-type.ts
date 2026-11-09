// Create the student variable with inline object type annotation
let student: { name: string; studentId: number; isEnrolled: boolean } = {
    name: "Sarah Johnson",
    studentId: 12345,
    isEnrolled: true
};

// Create the course variable with inline object type annotation
let course: { name: string; credits: number; instructor: string } = {
    name: "Introduction to TypeScript",
    credits: 3,
    instructor: "Dr. Smith"
};

// Print the required information
console.log(student.name);
console.log(student.studentId);
console.log(course.name);
console.log(course.credits);