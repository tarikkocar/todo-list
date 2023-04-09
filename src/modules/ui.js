import Task from "./tasks.js";
import Project from "./projects.js";
import ToDoList from "./todolist.js";

export default class UI {
  constructor() {
    this.toDoList = new ToDoList();
    this.projectList = document.querySelector(".project-list");
    this.addProjectBtn = document.querySelector(".add-project-btn");
  }

  displayProjects() {
    const projects = this.toDoList.getProjects();
    this.projectList.innerHTML = "";

    for (let i = 0; i < projects.length; i++) {
      if (
        projects[i].title !== "Home" &&
        projects[i].title !== "Today" &&
        projects[i].title !== "This week"
      ) {
        const projectName = document.createTextNode(projects[i].title);
        const projectItem = document.createElement("li");
        projectItem.appendChild(projectName);
        this.projectList.appendChild(projectItem);
      }
    }
  }

  createProject() {
    const projectNameInput = document.createElement("input");
    projectNameInput.setAttribute("type", "text");
    projectNameInput.setAttribute("placeholder", "Project name");

    const projectItem = document.createElement("li");
    projectItem.appendChild(projectNameInput);
    this.projectList.appendChild(projectItem);

    projectNameInput.focus();

    projectNameInput.addEventListener("keydown", (e) => {
      const projectName = projectNameInput.value.trim();
      if (projectName && e.key === "Enter") {
        this.toDoList.addProject(projectName);
        this.displayProjects();
        projectItem.remove();
      } else if (e.key === "Escape") {
        projectItem.remove();
      }
    });
  }

  displayTasks() {}

  createTask() {}

  addPageEventListeners() {
    const addProjectBtn = document.querySelector(".add-project-btn");
    addProjectBtn.addEventListener("click", this.createProject.bind(this));
  }
}
