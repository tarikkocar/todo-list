export default class Task {
  constructor(
    title,
    description,
    dueDate,
    priority = "Medium",
    status = "Incomplete"
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
  }

  markComplete() {
    this.status = "Complete";
  }
}
