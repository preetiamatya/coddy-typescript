// Create the Book1 interface
interface Book1 {
    title: string;
    readonly isbn: string;
    subtitle?: string;  // Optional property
    pages: number;
    readonly publishedYear: number;
    genre?: string;
}

// Create the Magazine interface
interface Magazine {
    name: string;
    readonly issueNumber: number;
    topic?: string;  // Optional property
    monthlySubscription: boolean;
}

// Create the variables using your interfaces
let novel1: Book1 = { title: "1984", isbn: "978-0-452-28423-4", pages: 328, publishedYear: 1949 };
let cookBook1: Book1 = { title: "The Joy of Cooking", isbn: "978-0-7432-4626-2", subtitle: "All About Baking", pages: 1132, publishedYear: 2006, genre: "cooking" };
let techMag: Magazine = { name: "Tech Today", issueNumber: 45, monthlySubscription: true };
let scienceMag: Magazine = { name: "Science Weekly", issueNumber: 12, topic: "Climate Change", monthlySubscription: false };

// Create the getBook1Details function
function getBook1Details(textBook1: Book1): string {
    return `${textBook1.title} - ${textBook1.pages} pages`;
}

// Create the getMagazineInfo function
function getMagazineInfo(magazine: Magazine): string {
    return `${magazine.name} Issue #${magazine.issueNumber}`;
}
// Print the required outputs
console.log(getBook1Details(novel1));
console.log(getBook1Details(cookBook1));
console.log(getMagazineInfo(techMag));
console.log(getMagazineInfo(scienceMag));
console.log(novel1.isbn);
console.log(techMag.monthlySubscription);