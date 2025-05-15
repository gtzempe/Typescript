// // // // // // // // //1
// // // // // // // // let userName: string = "Giorgos";
// // // // // // // // let age: number = 40;
// // // // // // // // let activeUser: boolean = true;

// // // // // // // // //2
// // // // // // // // let favoriteNumbers: number[] = [1, 3, 13];

// // // // // // // // //3
// // // // // // // // function userInfo(name: string, age: number, active: boolean): string {
// // // // // // // //   return `${name} is ${age} years old and is currently ${
// // // // // // // //     active ? "active" : "inactive"
// // // // // // // //   }`;
// // // // // // // // }
// // // // // // // // console.log(userInfo(userName, age, activeUser));

// // // // // // // // class Product {
// // // // // // // //   name: string;
// // // // // // // //   price: number;

// // // // // // // //   constructor(name: string, price: number) {
// // // // // // // //     this.name = name;
// // // // // // // //     this.price = price;
// // // // // // // //   }

// // // // // // // //   getInfo(): string {
// // // // // // // //     return `The product ${this.name} costs ${this.price}€`;
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // const prod = new Product("Iphone", 1200);
// // // // // // // // console.log(prod.getInfo());

// // // // // // // class Temperature {
// // // // // // //   private _celsius: number = 0;

// // // // // // //   increase(): void {
// // // // // // //     this._celsius++;
// // // // // // //   }

// // // // // // //   decrease(): void {
// // // // // // //     this._celsius--;
// // // // // // //   }

// // // // // // //   get celsius(): number {
// // // // // // //     return this._celsius;
// // // // // // //   }
// // // // // // // }

// // // // // // // const temp = new Temperature()
// // // // // // // temp.increase()
// // // // // // // temp.increase()
// // // // // // // temp.decrease()
// // // // // // // console.log(temp.celsius);

// // // // // // class Book {
// // // // // //   title: string;
// // // // // //   pages: number;

// // // // // //   constructor(title: string, pages: number) {
// // // // // //     this.title = title;
// // // // // //     this.pages = pages;
// // // // // //   }

// // // // // //   static comparePages(b1: Book, b2: Book): Book {
// // // // // //     return b1.pages > b2.pages ? b1 : b2;
// // // // // //   }
// // // // // // }
// // // // // // const book1 = new Book("The lord of the rings", 1500);
// // // // // // const book2 = new Book("Harry Potter", 1200);
// // // // // // // const compare = Book.comparePages(book1, book2);
// // // // // // // console.log(compare.title);
// // // // // // console.log(Book.comparePages(book1, book2).title);

// // // // // // class Playlist {
// // // // // //   private _songs: string[] = [];

// // // // // //   addSong(song: string): void {
// // // // // //     this._songs.push(song);
// // // // // //   }

// // // // // //   findSong(title: string): boolean {
// // // // // //     return this._songs.includes(title);
// // // // // //   }

// // // // // //   get songsList(): string[] {
// // // // // //     return this._songs;
// // // // // //   }
// // // // // // }

// // // // // // const song = new Playlist();
// // // // // // song.addSong("Firestarter");
// // // // // // song.addSong("Fear of the Dark");
// // // // // // song.addSong("September");
// // // // // // console.log(song.songsList);
// // // // // // console.log(song.findSong("Firestarter"));

// // // // // class BankAccount {
// // // // //   accountNumber: string;
// // // // //   accountHolder: string;
// // // // //   private _balance: number;

// // // // //   constructor(accountNumber: string, accountHolder: string, balance: number) {
// // // // //     if (balance < 0) throw new Error("Initial balance cannot be negative");
// // // // //     this.accountNumber = accountNumber;
// // // // //     this.accountHolder = accountHolder;
// // // // //     this._balance = balance;
// // // // //   }

// // // // //   deposit(amount: number): void {
// // // // //     if (amount <= 0) throw new Error("amount must be greater than zero");
// // // // //     this._balance += amount;
// // // // //   }

// // // // //   withdraw(amount: number): void {
// // // // //     if (amount <= 0) {
// // // // //       throw new Error("Withdrawal amount must be greater than zero");
// // // // //     }
// // // // //     if (amount > this._balance) {
// // // // //       throw new Error("Insufficient funds.");
// // // // //     }
// // // // //     this._balance -= amount;
// // // // //   }

// // // // //   get balance(): number {
// // // // //     return this._balance;
// // // // //   }
// // // // // }

// // // // // try {
// // // // //   const account = new BankAccount("GR12345", "Giorgos", 100);
// // // // //   account.deposit(50);
// // // // //   account.withdraw(200);
// // // // //   console.log(account.balance);
// // // // // } catch (error) {
// // // // //   if (error instanceof Error) {
// // // // //     console.error("Transaction Error", error.message);
// // // // //   }
// // // // // }

// // // // Excercice1

// // // // function divide(x: number, y: number): number {
// // // //   if (y === 0) throw new Error("cannot divide by zero");
// // // //   return x / y;
// // // // }

// // // // try {
// // // //   console.log("Result:", divide(10, 5));
// // // // } catch (error) {
// // // //   if (error instanceof Error) {
// // // //     console.error("Division Error,", error.message);
// // // //   }
// // // // }

// // // //Excersise2

// // // function validatePassword(pw: string): string {
// // //   if (pw.length < 6) {
// // //     throw new Error("Password is too short");
// // //   }
// // //   if (!/\d/.test(pw)) {
// // //     throw new Error("Password must contain a number");
// // //   }
// // //   return "Password Accepted";
// // // }

// // // try {
// // //   console.log("Password:", validatePassword("15eerrty"));
// // //   console.log("Password:", validatePassword("abcde"));
// // // } catch (error) {
// // //   if (error instanceof Error) {
// // //     console.log("Password is not valid,", error.message);
// // //   }
// // // }

// // 6; //
// // class Counter {
// //   private _count: number = 0;

// //   increment(): void {
// //     this._count++;
// //   }

// //   decrement(): void {
// //     if (this._count > 0) {
// //       this._count--;
// //     }
// //   }

// //   get count(): number {
// //     return this._count;
// //   }
// // }

// // const c = new Counter();
// // c.increment();
// // c.increment();
// // c.increment();
// // c.increment();
// // c.increment();
// // c.decrement();
// // console.log(c.count);

// //7
// class Vehicle {
//   make: string;
//   model: string;
//   year: number;

//   constructor(make: string, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   static compare(v1: Vehicle, v2: Vehicle): Vehicle {
//     return v1.year > v2.year ? v1 : v2;
//   }
// }

// const car1 = new Vehicle("Ferrari", "Testarosa", 2000);
// const car2 = new Vehicle("Porsche", "Cayman", 2017);

// console.log(Vehicle.compare(car1, car2));

class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }
  substract(x: number, y: number): number {
    return x - y;
  }
  multiply(x: number, y: number): number {
    return x * y;
  }
  divide(x: number, y: number): number {
    if (y === 0) {
      throw new Error("Cannot divide by zero");
    }
    return x / y;
  }
}

try {
  const calc = new Calculator();
  console.log("Add:", calc.add(1, 5));
  console.log("Subtract:", calc.substract(10, 3));
  console.log("Multiply:", calc.multiply(4, 5));
  console.log("Divide:", calc.divide(1, 0)); // θα σκάσει εδώ
} catch (error) {
  if (error instanceof Error) {
    console.error("Operation cannot proceed:", error.message);
  }
}
