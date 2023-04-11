export default class Task {
  constructor(
    title,
    description,
    dueDate,
    priority = "medium",
    status = "incomplete"
  ) {
    this.title = title;
    this.description = description;
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
