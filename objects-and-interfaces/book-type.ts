// Create type aliases for Book1 and Movie
type Book1 = {
    title: string;
    author: string;
    pages: number;
    isAvailable: boolean
};

type Movie = {
    title: string;
    director: string;
    duration: number;
    rating: string
};

// Create variables using the type aliases

const novel1: Book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    isAvailable: true,
};

const textBook1: Book1 = {
    title: "TypeScript HandBook1",
    author: "Microsoft",
    pages: 450,
    isAvailable: false,
};

const film: Movie = {
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    rating: "PG-13",
};

// Create functions to get information
function getBook1Info(textBook1: Book1): string {
    return `${textBook1.title} by ${textBook1.author} - ${textBook1.pages} pages`;
}

function getMovieInfo(film: Movie): string {
    return `${film.title} directed by ${film.director} (${film.duration} min)`;
}

// Print the required outputs
console.log(getBook1Info(novel1));
console.log(getBook1Info(textBook1));
console.log(getMovieInfo(film));
console.log(novel1.isAvailable);
