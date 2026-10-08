// class Person {
//     constructor(name, age, weight, height) {
//         this.name = name;
//         this.age = age;
//         this.weight = weight;
//         this.height = height;
//     }
//     get fullInfo() {
//         return `name : ${this.name}\n : age :  ${this.age}\n : weight : ${this.weight}\n : height : ${this.height}`;
//     }

//     set setAge(newAge) {
//         if(typeof newAge != "number") return;
//         this.age = newAge;
//     }
// }
// const person1 = new Person("Bobur", 24, 12, 200);
// person1.setAge = 35;
// console.log(person1.fullInfo);
//1
class Library {
  constructor(libraryName) {
    this.library = libraryName;
  }
}
//2
class Book extends Library {
  constructor(libraryName, name, author) {
    super(libraryName);
    this.name = name;
    this.author = author;
  }

  getName(key) {
    return { [key]: this.name };
  }
}
let book1 = new Book('Milliy', 'sariq devni minib', "Xudoyberdi To'xtaboyev");
let book2 = new Book('Pushkin', 'qalam', 'Nuriddin Sharipov');

console.log(book1.library); //Milliy
console.log(book1.name);  //sariq devni minib
console.log(book1.author); //Xudoyberdi To'xtaboyev
console.log(book2.library); //Pushkin
console.log(book2.name); //qalam
console.log(book2.author); //Nuriddin Sharipov

console.log(book1); // book1 object
console.log(book2); // book2 object
console.log(book1.getName('Title')); // { Title: 'sariq devni minib' }
console.log(book2.getName('Sarlavha')); // { Sarlavha: 'qalam' }

