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

    function printTaskSummary(task: Task): void {
        console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`);
    }

    function printAllTaskSummaries(taskList: Task[]): void {
        for (const task of taskList) {
            printTaskSummary(task);
        }
    }

    const sampleTasks: Task[] = [
        {
            id: 101,
            title: 'Design user interface',
            status: 'todo',
        },
        {
            id: 102,
            title: 'Implement authentication',
            status: 'in-progress',
        },
        {
            id: 103,
            title: 'Deploy to production',
            status: 'done',
        },
    ];

    const projectTasks: Task[] = [
        {
            id: 201,
            title: 'Setup development environment',
            status: 'done',
        },
        {
            id: 202,
            title: 'Create project structure',
            status: 'todo',
        },
    ];



    const expandedTasks = addTask(projectTasks, "Write documentation");

    const updatedProjectTasks = changeTaskStatus(
        expandedTasks,
        202,
        "in-progress"
    );

    const finalTasks = changeTaskStatus(
        updatedProjectTasks,
        3,
        "done"
    );

    const completedProjectTasks = listTasksByStatus(finalTasks, "done");
    console.log(projectTasks.length);
    console.log(finalTasks.length);
    console.log(completedProjectTasks.length);
    printTaskSummary(completedProjectTasks[0]);
    printTaskSummary(completedProjectTasks[completedProjectTasks.length - 1]);
    printAllTaskSummaries(finalTasks)


})();