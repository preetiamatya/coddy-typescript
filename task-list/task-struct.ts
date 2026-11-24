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


// Create the getTaskInfo function
function getTaskInfo(task: Task) :string {
     return `Task ${task.id}: ${task.title} - ${task.status}`;
}

// Print the required outputs
console.log(getTaskInfo(firstTask));
console.log(getTaskInfo(secondTask));
console.log(getTaskInfo(thirdTask));
console.log(firstTask.status);
console.log(secondTask.title);
