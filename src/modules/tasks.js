export default class Task {
  constructor(title, dueDate, priority = "medium", status = "incomplete") {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
  }

  markComplete() {
    this.status = "completed";
  }

  markIncomplete() {
    this.status = "incomplete";
  }
}
