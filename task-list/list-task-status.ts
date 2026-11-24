(() => {
// Create the Task interface
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

function changeTaskStatus(
  taskList: Task[],
  taskId: number,
  newStatus: 'todo' | 'in-progress' | 'done'
): Task[] {
  return taskList.map((task) =>
    task.id === taskId
      ? { ...task, status: newStatus }
      : task
  );
}

function listTasksByStatus(
  taskList: Task[],
  status: 'todo' | 'in-progress' | 'done'
): Task[] {
  return taskList.filter((task) => task.status === status);
}

const mixedTasks: Task[] = [firstTask, secondTask, thirdTask];
const todoTasks: Task[] = listTasksByStatus(mixedTasks, 'todo');

const inProgressTasks: Task[] = listTasksByStatus(mixedTasks, 'in-progress');

const doneTasks: Task[] = listTasksByStatus(mixedTasks, 'done');

console.log(mixedTasks.length);
console.log(todoTasks.length);
console.log(inProgressTasks.length);
console.log(doneTasks.length);
console.log(getTaskInfo(todoTasks[0]));
console.log(getTaskInfo(inProgressTasks[0]));
console.log(getTaskInfo(doneTasks[0]));
})();