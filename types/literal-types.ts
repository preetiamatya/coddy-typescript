// Create type aliases for Direction, GameState, and Difficulty
type Direction = "left" | "right" | "up" | "down";
type GameState = "menu" | "playing" | "paused" | "gameover";
type Difficulty = "easy" | "medium" | "hard";

// Declare variables using your type aliases
let playerDirection: Direction = "up";
let currentState: GameState = "playing";
let selectedDifficulty: Difficulty = "medium";

// Create the movePlayer and updateGameState functions
function movePlayer(direction: Direction | string) {
    console.log(`Moving ${direction}`);
}
function updateGameState(currentState: GameState | string) {
    console.log(`Game state: ${currentState}`);
}
// Call the functions and print the results
movePlayer("up");
updateGameState("playing");
console.log(selectedDifficulty);