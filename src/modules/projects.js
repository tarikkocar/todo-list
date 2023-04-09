import Task from "./tasks.js";

export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(new Task(task));
  }

  deleteTask(task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  getTasks() {
    return this.tasks;
  }
}
