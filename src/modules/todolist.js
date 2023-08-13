import Project from "./projects.js";

export default class ToDoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Home"));
    this.projects.push(new Project("Today"));
    this.projects.push(new Project("This week"));
  }

  addProject(project) {
    this.projects.push(new Project(project));
  }

  deleteProject(project) {
    const index = this.projects.indexOf(project);
    if (index > -1) {
      this.projects.splice(index, 1);
    }
  }

  getProjects() {
    return this.projects;
  }

  getAllTasks() {
    let allTasks = [];

    for (let i = 0; i < this.projects.length; i++) {
      if (i !== 1 && i !== 2) {
        allTasks = allTasks.concat(this.projects[i].getTasks());
      }
    }

    return allTasks;
  }
}
