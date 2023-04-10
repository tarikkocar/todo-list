import Project from "./projects.js";

export default class ToDoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Home", 0));
    this.projects.push(new Project("Today", 1));
    this.projects.push(new Project("This week", 2));
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
}
