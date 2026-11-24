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
    const testTasks: Task[] = [firstTask, secondTask, thirdTask];

    const progressTasks: Task[] = changeTaskStatus(testTasks, 1, 'in-progress');

    const completedTasks: Task[] = changeTaskStatus(progressTasks, 2, 'done');

    console.log(getTaskInfo(testTasks[0]));
    console.log(getTaskInfo(progressTasks[0]));
    console.log(getTaskInfo(completedTasks[1]));
    console.log(testTasks[0].status);
    console.log(completedTasks[1].status);
})();