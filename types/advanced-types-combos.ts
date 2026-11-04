import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input: string[] = [];

// 1. Create type aliases for Success, Failure, and Result
type Success = {
    status: "success";
    data: any;
};

type Failure = {
    status: "error";
    message: string;
};

type Result = Success | Failure;

// 2. Create the processResult function
function processResult(result: Result) {
    if (result.status === "success") {
        console.log(`Operation successful: ${result.data}`);
    }
    if (result.status === "error") {
        console.log(`Operation failed: ${result.message}`);
    }
}

// 3. Create the handleApiResponse function

function handleApiResponse(response: Result): boolean {
    if (response.status === "success") {
        return true;
    }
    return false;
}


rl.on('line', (line: string) => {
    input.push(line.trim());
    if (input.length === 2) {
        // Parse the JSON inputs
        const result1 = JSON.parse(input[0]);
        const result2 = JSON.parse(input[1]);

        // 4. Call the functions with the parsed results and print the outputs
        processResult(result1);
        console.log(handleApiResponse(result1) ? "true" : "false");
        processResult(result2);
        console.log(handleApiResponse(result2) ? "true" : "false");
        rl.close();
    }
});






