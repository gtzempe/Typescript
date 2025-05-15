// class Person {
//   firstName: string;
//   lastName: string;
//   age: number;

//   constructor(firstName: string = "", lastName: string = "", age: number = 0) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   getFullName(): string {
//     if (!this.firstName) {
//       return "Anonymous";
//     }
//     return `${this.firstName} ${this.lastName}`;
//   }

//   getFullDetails(): string {
//     return `${this.getFullName()} ${this.age}`;
//   }

//   isAdult(): boolean {
//     return this.age >= 18;
//   }

//   celebrateBirthDay(): void {
//     this.age += 1;
//   }

//   rename(newFirstName: string): void {
//     if (newFirstName.trim() !== "") {
//       this.firstName = newFirstName;
//     }
//   }
// }

// // const p = new Person("George", "Tzempe");
// // console.log(p.getFullName());

// // const p2 = new Person("George", "Tzempe", 17)
// // console.log(p2.isAdult());
// // console.log(p2.celebrateBirthDay());
// // console.log(`${p2.age} ${p2.isAdult()}`);
// // // console.log(`${p2.rename("Kostas")}`);

// // class Student extends Person {
// //   courses: string[] = [];

// //   constructor(firstName: string, lastName: string, age: number) {
// //     super(firstName, lastName, age);
// //   }

// //   enroll(course: string): void {
// //     this.courses.push(course);
// //   }

// //   listCourses(): string {
// //     return this.courses.join(", ");
// //   }
// // }

// // const s1 = new Student("George", "Tzempe", 40);
// // s1.enroll("Javascript")
// // s1.enroll("React")

// // console.log(s1.getFullDetails());
// // console.log(s1.listCourses());

// class Employee {
//   firstName: string;
//   lastName: string;
//   jobTitle: string;
//   salary: number;

//   constructor(
//     firstName: string,
//     lastName: string,
//     jobTitle: string,
//     salary: number
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.jobTitle = jobTitle;
//     this.salary = salary;
//   }

// //   getAnnualSalary(): number {
// //     return this.salary * 12;
// //   }
// // }

// // const e1 = new Employee("Geo", "Tze", "Developer", 1500);
// // console.log(`Your annual salary is: ${e1.getAnnualSalary()}`);

// abstract class Shape {
//   abstract area(): number;

//   describe(): string {
//     return "This is geometric shape";
//   }
// }

// class Circle extends Shape {
//   radius: number;

//   constructor(radius: number) {
//     super();
//     this.radius = radius;
//   }

//   area(): number {
//     return Math.PI * this.radius * this.radius;
//   }

//   override describe(): string {
//     return `"This is a circle with radius ${this.radius}"`;
//   }
// }

// class Rectangle extends Shape {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   area(): number {
//     return this.width * this.height;
//   }

//   override describe(): string {
//     return `"This is a rectangle with width ${this.width} and height ${this.height}"`;
//   }
// }

// const c = new Circle(5);
// const r = new Rectangle(15, 5);

// console.log(c.area().toFixed(2));
// console.log(r.area());
// console.log(c.describe());
// console.log(r.describe());

//1
let userName: string = "Giorgos";
let age: number = 40;
let activeUser: boolean = true;

//2
let favoriteNumbers: number[] = [1, 3, 13];

//3
function userInfo(name: string, age: number, active: boolean): string {
  return `${name} is ${age} years old and is currently ${
    active ? "active" : "inactive"
  }`;
}
console.log(userInfo(userName, age, activeUser));
