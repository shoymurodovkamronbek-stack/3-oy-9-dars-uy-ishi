class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class Admin extends User {}
class Employee extends User {}
class Customer {
  constructor(id, name, phone) {
    this.id = id;
    this.name = name;
    this.phone = phone;
  }
}

class Task {
  static #count = 1;

  constructor(title, description, customer, assignedEmployee = null) {
    this.id = Task.#count++;
    this.title = title;
    this.description = description;
    this.customer = customer;
    this.assignedEmployee = assignedEmployee;
    this.status = "pending";
  }
}

class CRM {
  #employees = [];
  #customers = [];
  #tasks = [];

  addEmployee(emp) { this.#employees.push(emp); }
  addCustomer(cust) { this.#customers.push(cust); }
  createTask(title, desc, customer, employee = null) {
    if (!this.#customers.includes(customer)) throw new Error("Mijoz topilmadi!");
    if (employee && !this.#employees.includes(employee)) throw new Error("Xodim topilmadi!");

    const task = new Task(title, desc, customer, employee);
    this.#tasks.push(task);
    return task;
  }

  changeTaskStatus(taskId, newStatus, user) {
    const task = this.#tasks.find(t => t.id === taskId);
    if (!task) throw new Error("Task topilmadi!");

    if (task.status === "completed" && newStatus === "pending") {
      throw new Error("Tugatilgan topshiriqni pending qilib bo'lmaydi!");
    }

    if (user instanceof Admin) {
      task.status = newStatus;
    } else if (user instanceof Employee) {
      if (task.assignedEmployee !== user) throw new Error("Bu sizning taskingiz emas!");
      task.status = newStatus;
    }
  }

  getStatistics() {
    return {
      totalEmployees: this.#employees.length,
      totalCustomers: this.#customers.length,
      totalTasks: this.#tasks.length,
      pendingTasks: this.#tasks.filter(t => t.status === "pending").length,
      inProgressTasks: this.#tasks.filter(t => t.status === "in progress").length,
      completedTasks: this.#tasks.filter(t => t.status === "completed").length
    };
  }
}