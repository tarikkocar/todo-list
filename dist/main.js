(()=>{"use strict";class t{constructor(t,e,s,i="medium",a="incomplete"){this.title=t,this.description=e,this.dueDate=s,this.priority=i,this.status=a}markComplete(){this.status="completed"}markIncomplete(){this.status="incomplete"}}class e{constructor(t){this.title=t,this.tasks=[]}addTask(e){this.tasks.push(new t(e))}deleteTask(t){const e=this.tasks.indexOf(t);e>-1&&this.tasks.splice(e,1)}getTasks(){return this.tasks}}class s{constructor(){this.projects=[],this.projects.push(new e("Home",0)),this.projects.push(new e("Today",1)),this.projects.push(new e("This week",2))}addProject(t){this.projects.push(new e(t))}deleteProject(t){const e=this.projects.indexOf(t);e>-1&&this.projects.splice(e,1)}getProjects(){return this.projects}}(new class{constructor(){this.toDoList=new s,this.currentProjectIndex=0,this.basicItems=document.querySelector(".basic-items"),this.projectList=document.querySelector(".project-list"),this.addProjectBtn=document.querySelector(".add-project-btn"),this.taskList=document.querySelector(".task-list"),this.addTaskBtn=document.querySelector(".add-task-btn")}loadHomePage(){this.displayTasks(this.currentProjectIndex),this.handleLeftPaneAnimation(this.currentProjectIndex),this.addPageEventListeners()}displayProjects(){const t=this.toDoList.getProjects();this.projectList.innerHTML="";for(let e=0;e<t.length;e++)if("Home"!==t[e].title&&"Today"!==t[e].title&&"This week"!==t[e].title){const s=document.createTextNode(t[e].title),i=document.createElement("li");i.dataset.index=e,i.appendChild(s),this.projectList.appendChild(i)}}createProject(){const t=this.projectList.querySelector(".new-project-input");if(t)return void t.focus();const e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("placeholder","Project name"),e.classList.add("new-project-input");const s=document.createElement("li");s.appendChild(e),this.projectList.appendChild(s),e.focus(),e.addEventListener("keydown",(t=>{const i=e.value.trim();if(i&&"Enter"===t.key){this.toDoList.addProject(i),this.displayProjects();const t=this.toDoList.projects.length-1;this.displayTasks(t),this.handleLeftPaneAnimation(t),s.remove()}else"Escape"===t.key&&s.remove()}))}displayTasks(t){this.currentProjectIndex=t;const e=this.toDoList.getProjects()[t].getTasks();this.taskList.innerHTML="";for(let t=0;t<e.length;t++){const s=document.createElement("div");s.classList.add("task"),s.classList.add(`${e[t].priority}-priority`),s.classList.add(`${e[t].status}`);const i=document.createElement("input");i.setAttribute("type","checkbox"),i.classList.add("task-checkbox");const a=document.createElement("span");a.classList.add("task-name");const n=document.createTextNode(`${e[t].title}`);a.appendChild(n);const c=document.createElement("button");c.classList.add("task-edit");const d=document.createElement("span");d.classList.add("material-symbols-outlined");const o=document.createTextNode("edit");d.appendChild(o),c.appendChild(d);const r=document.createElement("button");r.classList.add("task-delete");const l=document.createTextNode("X");r.appendChild(l),s.appendChild(i),s.appendChild(a),s.appendChild(c),s.appendChild(r),this.taskList.appendChild(s),this.addTaskEventListeners(s,e[t])}}createTask(){const t=this.taskList.querySelector(".task-input");if(t)return void t.focus();const e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("placeholder","Task title"),e.classList.add("task-input");const s=document.createElement("div");s.appendChild(e),this.taskList.appendChild(s),e.focus(),e.addEventListener("keydown",(t=>{const i=e.value.trim();i&&"Enter"===t.key?(this.toDoList.getProjects()[this.currentProjectIndex].addTask(i),this.displayTasks(this.currentProjectIndex),s.remove()):"Escape"===t.key&&s.remove()}))}handleLeftPaneAnimation(t){document.querySelectorAll(".basic-items li, .project-list li").forEach(((e,s)=>{s===t?e.classList.add("active"):e.classList.remove("active")}))}addTaskEventListeners(t,e){const s=t.querySelector("input"),i=t.querySelectorAll("button");s.addEventListener("change",(()=>{s.checked?(t.classList.add("completed"),e.markComplete()):(t.classList.remove("completed"),e.markIncomplete())})),i[1].addEventListener("click",(()=>{this.toDoList.getProjects()[this.currentProjectIndex].deleteTask(e),t.remove()}))}addPageEventListeners(){this.addProjectBtn.addEventListener("click",this.createProject.bind(this)),this.basicItems.addEventListener("click",(t=>{const e=t.target.innerHTML;"Home"===e?(this.displayTasks(0),this.handleLeftPaneAnimation(0)):"Today"===e?(this.displayTasks(1),this.handleLeftPaneAnimation(1)):"This week"===e&&(this.displayTasks(2),this.handleLeftPaneAnimation(2))})),this.projectList.addEventListener("click",(t=>{if("LI"===t.target.tagName){const e=Number(t.target.dataset.index);this.displayTasks(e),this.handleLeftPaneAnimation(e)}})),this.addTaskBtn.addEventListener("click",this.createTask.bind(this))}}).loadHomePage()})();