class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `${this.name}, ${this.age} yosh`;
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getInfo() {
    return `${super.getInfo()}, ID: ${this.studentId}`;
  }
}

class Teacher extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  getInfo() {
    return `${super.getInfo()}, Maosh: ${this.salary}`;
  }
}

class Course {
  constructor(name) {
    this.name = name;
    this.teacher = null;
    this.students = [];
  }

  setTeacher(teacher) {
    this.teacher = teacher;
  }

  addStudent(student) {
    if (!this.students.includes(student)) {
      this.students.push(student);
    }
  }

  removeStudent(studentId) {
    this.students = this.students.filter(s => s.studentId !== studentId);
  }

  getCourseInfo() {
    return `Kurs: ${this.name}, O'quvchilar: ${this.students.length} ta`;
  }
}