(()=>{"use strict";class t{constructor(t,e,s,o="Medium",i="Incomplete"){this.title=t,this.description=e,this.dueDate=s,this.priority=o,this.status=i}markComplete(){this.status="Complete"}}class e{constructor(t){this.title=t,this.tasks=[]}addTask(e){this.tasks.push(new t(e))}deleteTask(t){const e=this.tasks.indexOf(t);e>-1&&this.tasks.splice(e,1)}getTasks(){return this.tasks}}class s{constructor(){this.projects=[],this.projects.push(new e("Home")),this.projects.push(new e("Today")),this.projects.push(new e("This week"))}addProject(t){this.projects.push(new e(t))}deleteProject(t){const e=this.projects.indexOf(t);e>-1&&this.projects.splice(e,1)}getProjects(){return this.projects}}const o=new class{constructor(){this.toDoList=new s,this.projectList=document.querySelector(".project-list"),this.addProjectBtn=document.querySelector(".add-project-btn")}displayProjects(){const t=this.toDoList.getProjects();this.projectList.innerHTML="";for(let e=0;e<t.length;e++)if("Home"!==t[e].title&&"Today"!==t[e].title&&"This week"!==t[e].title){const s=document.createTextNode(t[e].title),o=document.createElement("li");o.appendChild(s),this.projectList.appendChild(o)}}createProject(){const t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("placeholder","Project name");const e=document.createElement("li");e.appendChild(t),this.projectList.appendChild(e),t.focus(),t.addEventListener("keydown",(s=>{const o=t.value.trim();o&&"Enter"===s.key?(this.toDoList.addProject(o),this.displayProjects(),e.remove()):"Escape"===s.key&&e.remove()}))}addPageEventListeners(){document.querySelector(".add-project-btn").addEventListener("click",this.createProject.bind(this))}};o.addPageEventListeners(),console.log(o.toDoList)})();