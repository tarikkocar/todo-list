import ToDoList from "./todolist.js";
import Project from "./projects.js";
import Task from "./tasks.js";
import { isToday, isThisWeek, format } from "date-fns";
import Logo from "../images/logo.svg";
import Edit from "../images/edit.svg";
import GitHub from "../images/github-gray.svg";

export default class UI {
  constructor() {
    this.toDoList = this.loadToDoList() || new ToDoList();
    this.currentProjectIndex = 0;
    this.basicItems = document.querySelector(".basic-items");
    this.projectList = document.querySelector(".project-list");
    this.addProjectBtn = document.querySelector(".add-project-btn");
    this.taskList = document.querySelector(".task-list");
    this.addTaskBtn = document.querySelector(".add-task-btn");
  }

  loadHomePage() {
    this.displayProjects();
    this.displayTasks(this.currentProjectIndex);
    this.handleLeftPaneAnimation(this.currentProjectIndex);
    this.addPageEventListeners();
    const logo = document.createElement("img");
    logo.setAttribute("src", Logo);
    document
      .querySelector(".header")
      .insertBefore(logo, document.querySelector(".header").firstChild);

    const github = document.createElement("img");
    github.setAttribute("src", GitHub);
    document.querySelector(".footer a").appendChild(github);
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
        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.setAttribute("type", "button");
        deleteProjectBtn.innerHTML = "X";
        deleteProjectBtn.classList.add("project-delete");
        projectItem.dataset.index = i;
        projectItem.appendChild(projectName);
        projectItem.appendChild(deleteProjectBtn);
        this.projectList.appendChild(projectItem);
      }
    }
  }

  createProject() {
    const existingInput = this.projectList.querySelector(".new-project-input");
    if (existingInput) {
      existingInput.focus();
      return;
    }

    const projectNameInput = document.createElement("input");
    projectNameInput.setAttribute("type", "text");
    projectNameInput.setAttribute("placeholder", "Project name");
    projectNameInput.classList.add("new-project-input");

    const projectItem = document.createElement("li");
    projectItem.appendChild(projectNameInput);
    this.projectList.appendChild(projectItem);

    projectNameInput.focus();

    projectNameInput.addEventListener("keydown", (e) => {
      const projectName = projectNameInput.value.trim();
      if (projectName && e.key === "Enter") {
        this.toDoList.addProject(projectName);
        this.displayProjects();
        const newProjectIndex = this.toDoList.projects.length - 1;
        this.displayTasks(newProjectIndex);
        this.handleLeftPaneAnimation(newProjectIndex);
        projectItem.remove();
        this.saveToDoList(this.toDoList);
      } else if (e.key === "Escape") {
        projectItem.remove();
      }
    });
  }

  displayTasks(projectIndex) {
    this.currentProjectIndex = projectIndex;
    const currentProject = this.toDoList.getProjects()[projectIndex];
    const currentTasks =
      projectIndex === 0
        ? this.toDoList.getAllTasks()
        : projectIndex === 1
        ? this.toDoList
            .getAllTasks()
            .filter((task) => isToday(new Date(task.dueDate)))
        : projectIndex === 2
        ? this.toDoList
            .getAllTasks()
            .filter((task) => isThisWeek(new Date(task.dueDate)))
        : currentProject.getTasks();
    this.taskList.innerHTML = "";

    for (let i = 0; i < currentTasks.length; i++) {
      const taskItem = document.createElement("div");
      taskItem.classList.add("task");
      taskItem.classList.add(`${currentTasks[i].priority}-priority`);
      taskItem.classList.add(`${currentTasks[i].status}`);

      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.classList.add("task-checkbox");
      checkBox.checked = currentTasks[i].status === "completed" ? true : false;

      const taskName = document.createElement("span");
      taskName.classList.add("task-name");
      const taskNameText = document.createTextNode(`${currentTasks[i].title}`);
      taskName.appendChild(taskNameText);

      const editBtn = document.createElement("img");
      editBtn.setAttribute("src", Edit);
      editBtn.classList.add("task-edit");

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("task-delete");
      const deleteText = document.createTextNode("X");
      deleteBtn.appendChild(deleteText);

      taskItem.appendChild(checkBox);
      taskItem.appendChild(taskName);
      taskItem.appendChild(editBtn);
      taskItem.appendChild(deleteBtn);

      if (currentTasks[i].dueDate) {
        const dueDate = document.createElement("span");
        dueDate.classList.add("due-date");
        const date = new Date(currentTasks[i].dueDate);
        const displayedDate = format(date, "d MMM");
        dueDate.innerHTML = displayedDate;
        taskName.insertAdjacentElement("afterend", dueDate);
      }

      this.taskList.appendChild(taskItem);

      this.addTaskEventListeners(taskItem, currentTasks[i]);
    }

    if ((this.currentProjectIndex === 1) | (this.currentProjectIndex === 2)) {
      this.addTaskBtn.classList.add("hidden");
    } else {
      this.addTaskBtn.classList.remove("hidden");
    }
  }

  createTask() {
    const existingInput = this.taskList.querySelector(".task-input");
    if (existingInput) {
      existingInput.focus();
      return;
    }

    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("type", "text");
    taskNameInput.setAttribute("placeholder", "Task title");
    taskNameInput.classList.add("task-input");

    const taskItem = document.createElement("div");
    taskItem.appendChild(taskNameInput);
    this.taskList.appendChild(taskItem);

    taskNameInput.focus();

    taskNameInput.addEventListener("keydown", (e) => {
      const taskName = taskNameInput.value.trim();
      if (taskName && e.key === "Enter") {
        this.toDoList.getProjects()[this.currentProjectIndex].addTask(taskName);
        this.displayTasks(this.currentProjectIndex);
        taskItem.remove();
        this.saveToDoList(this.toDoList);
      } else if (e.key === "Escape") {
        taskItem.remove();
      }
    });
  }

  handleLeftPaneAnimation(projectIndex) {
    const leftPaneItems = document.querySelectorAll(
      ".basic-items li, .project-list li"
    );
    leftPaneItems.forEach((item, index) => {
      if (index === projectIndex) {
        item.classList.add("active");
        const deleteBtn = item.querySelector("button");
        if (deleteBtn) {
          deleteBtn.classList.remove("hidden");
        }
      } else {
        item.classList.remove("active");
        const deleteBtn = item.querySelector("button");
        if (deleteBtn) {
          deleteBtn.classList.add("hidden");
        }
      }
    });
  }

  showForm(taskElement, task) {
    const taskName = taskElement.querySelector(".task-name");
    const dueDate = taskElement.querySelector(".due-date");
    const taskForm = document.createElement("form");
    const taskNameInput = document.createElement("input");
    const dueDateInput = document.createElement("input");
    const saveFormBtn = document.createElement("button");
    const priorityArea = document.createElement("div");

    taskForm.setAttribute("action", "#");
    taskNameInput.setAttribute("type", "text");
    taskNameInput.classList.add("task-edit-input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.classList.add("task-date");
    saveFormBtn.setAttribute("type", "button");
    saveFormBtn.innerHTML = "Save";
    priorityArea.classList.add("priority-area");
    priorityArea.innerHTML =
      "<div class= 'low-priority-btn'><input type='radio' id='low' name='priority'><label for='low'>Low</label></div><div class='medium-priority-btn'><input type='radio' id='medium' name='priority'><label for='medium'>Medium</label></div><div class='high-priority-btn'><input type='radio' id='high' name='priority'><label for='high'>High</label></div>";

    taskNameInput.value = task.title;
    dueDateInput.value = task.dueDate;

    if (taskName) {
      taskElement.replaceChild(taskNameInput, taskName);
    }
    if (dueDate) {
      taskElement.replaceChild(dueDateInput, dueDate);
    } else {
      taskNameInput.insertAdjacentElement("afterend", dueDateInput);
    }
    dueDateInput.insertAdjacentElement("afterend", saveFormBtn);
    dueDateInput.insertAdjacentElement("beforebegin", priorityArea);
    taskElement.querySelector(`input[id="${task.priority}"]`).checked = true;

    saveFormBtn.addEventListener("click", () => {
      task.title = taskNameInput.value;
      task.dueDate = dueDateInput.value;
      const radioButtons = taskElement.querySelectorAll("input[type='radio']");
      let selectedId = null;
      radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
          selectedId = radioButton.id;
        }
      });
      task.priority = selectedId;
      this.displayTasks(this.currentProjectIndex);
      this.saveToDoList(this.toDoList);
    });
  }

  saveToDoList(toDoList) {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }

  loadToDoList() {
    if (localStorage.getItem("toDoList")) {
      const projectData = JSON.parse(localStorage.getItem("toDoList"));
      const loadedToDoList = new ToDoList();
      loadedToDoList.projects = projectData.projects.map((projectData) => {
        const project = new Project(projectData.title);
        project.tasks = projectData.tasks.map(
          (taskData) =>
            new Task(
              taskData.title,
              taskData.dueDate,
              taskData.priority,
              taskData.status
            )
        );
        return project;
      });
      return loadedToDoList;
    } else {
      return new ToDoList();
    }
  }

  addTaskEventListeners(taskElement, task) {
    const checkBox = taskElement.querySelector("input");
    const editBtn = taskElement.querySelector("img");
    const deleteBtn = taskElement.querySelector(".task-delete");

    // Mark as done
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        taskElement.classList.add("completed");
        task.markComplete();
      } else {
        taskElement.classList.remove("completed");
        task.markIncomplete();
      }
      this.saveToDoList(this.toDoList);
    });

    // Edit task
    editBtn.addEventListener("click", () => {
      this.showForm(taskElement, task);
    });

    // Delete task
    deleteBtn.addEventListener("click", () => {
      this.toDoList.getProjects()[this.currentProjectIndex].deleteTask(task);
      taskElement.remove();
      this.saveToDoList(this.toDoList);
    });
  }

  addPageEventListeners() {
    this.addProjectBtn.addEventListener("click", this.createProject.bind(this));

    this.basicItems.addEventListener("click", (e) => {
      const selectedBasicItem = e.target.innerHTML;
      if (selectedBasicItem === "Home") {
        this.displayTasks(0);
        this.handleLeftPaneAnimation(0);
      } else if (selectedBasicItem === "Today") {
        this.displayTasks(1);
        this.handleLeftPaneAnimation(1);
      } else if (selectedBasicItem === "This week") {
        this.displayTasks(2);
        this.handleLeftPaneAnimation(2);
      }
    });

    this.projectList.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const projectIndex = Number(e.target.dataset.index);
        this.displayTasks(projectIndex);
        this.handleLeftPaneAnimation(projectIndex);
      } else if (e.target.tagName === "BUTTON") {
        const projectIndex = Number(e.target.parentNode.dataset.index);
        this.toDoList.deleteProject(projectIndex);
        this.displayProjects();
        if (this.toDoList.getProjects()[projectIndex]) {
          this.handleLeftPaneAnimation(projectIndex);
          this.displayTasks(projectIndex);
        } else {
          this.handleLeftPaneAnimation(projectIndex - 1);
          this.displayTasks(projectIndex - 1);
        }
        this.saveToDoList(this.toDoList);
      }
    });

    this.addTaskBtn.addEventListener("click", this.createTask.bind(this));
  }
}
