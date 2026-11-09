// Create the Computer interface with the required properties and methods
interface Computer {
    readonly id: number;
    brand: string;
    ramInGB?: number;
    isLaptop: boolean;
    boot(): void;
}

// Create the Server interface with the required properties and methods
interface Server {
    readonly hostname: string;
    operatingSystem: string;
    maxConnections?: number;
    isOnline: boolean;
    restart(): void;
    getStatus(): string;
}

// Create the workstation, laptop, and webServer variables
const workstation: Computer = {
    id: 1001,
    brand: "Dell",
    ramInGB: 16,
    isLaptop: false,
    boot() {
        return ("Dell workstation is booting up...");
    },
};

const laptop: Computer = {
    id: 1002,
    brand: "MacBook",
    isLaptop: true,
    boot() {
        return ("MacBook laptop is starting...");
    },
};

const webServer: Server = {
    hostname: "web-01",
    operatingSystem: "Ubuntu",
    maxConnections: 1000,
    isOnline: true,
    restart() {
        return ("Restarting web-01 server...");
    },
    getStatus() {
        return "web-01 is online";
    },
};

// Create the checkComputerSpecs and getServerInfo functions
function checkComputerSpecs(computer: Computer): string {
    const type = computer.isLaptop ? "laptop" : "desktop";
    return `${computer.brand} ${type}`;
}

function getServerInfo(server: Server): string {
    return `${server.hostname} runs ${server.operatingSystem}`;
}

// Print all the required outputs
console.log(workstation.boot());
console.log(laptop.boot());
console.log(checkComputerSpecs(workstation));
console.log(checkComputerSpecs(laptop));
console.log(webServer.getStatus());
console.log(getServerInfo(webServer));
console.log(workstation.id);
console.log(webServer.restart());

