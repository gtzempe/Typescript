class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName} ${this.age}`
  }
}

const p = new Person("Anna", "Papadopoulou", 28)
console.log(p.getFullName());