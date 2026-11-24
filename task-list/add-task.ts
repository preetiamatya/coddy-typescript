(() => {// Create the Task interface
interface Task {
    id: number;
    title: string;
    status: "todo" | "in-progress" | "done";
}


// Create the task variables
const firstTask: Task = {
    id: 1,
    title: "Learn TypeScript interfaces",
    status: "todo",
};

const secondTask: Task = {
    id: 2,
    title: "Build task management app",
    status: "in-progress",
};

const thirdTask: Task = {
    id: 3,
    title: "Write unit tests",
    status: "done",
};

function addTask(taskList: Task[], title: string): Task[] {
    const newTask: Task = {
        id: taskList.length + 1,
        title,
        status: "todo",
    };

    return [...taskList, newTask];
}

const initialTasks: Task[] = [firstTask, secondTask];
const updatedTasks = addTask(initialTasks, "Review code changes");

// Create the getTaskInfo function
function getTaskInfo(task: Task): string {
    return `Task ${task.id}: ${task.title} - ${task.status}`;
}

// Print the required outputs
console.log(initialTasks.length);
console.log(updatedTasks.length);
console.log(getTaskInfo(updatedTasks[updatedTasks.length - 1]));
console.log((updatedTasks[updatedTasks.length - 1].title));
console.log((updatedTasks[updatedTasks.length - 1].status));
})();