class TodoTask {
    constructor(title, description, nextTask = null) {
      this.title = title;
      this.description = description;
      this.nextTask = nextTask;
    }
  }
  
  const task1 = new TodoTask("Task 1", "Do something");
  const task2 = new TodoTask("Task 2", "Do something else", task1);
  const task3 = new TodoTask("Task 3", "Do another thing", task2);
  
  function printTodos(startingTask) {
    let currentTask = startingTask;
    while (currentTask) {
      console.log(`Title: ${currentTask.title}`);
      console.log(`Description: ${currentTask.description}`);
      console.log(`Next Task: ${currentTask.nextTask ? currentTask.nextTask.title : 'None'}`);
      currentTask = currentTask.nextTask;
    }
  }

  printTodos(task3);  