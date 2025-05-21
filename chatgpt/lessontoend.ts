// function formatInput(input: string | number) {
//   if (typeof input === "string") {
//     return input.toUpperCase();
//   } else {
//     return input * 10;
//   }
// }

// type Status = "success" | "error" | "warning";
// function getStatus(status: Status): string {
//   if (status === "success") {
//     return "All good";
//   } else if (status === "error") {
//     return "There is an error";
//   } else {
//     return "There is a warning";
//   }
// }

// type Person = { name: string };
// type Age = { age: number };
// type PersonWithAge = Person & Age;

// function nameAge(person: PersonWithAge): string {
//   return `${person.name} ${person.age}`;
// }

// function identity<T>(value: T): T {
//   return value;
// }

// class Stack<T> {
//   private _list: T[] = [];

//   pushElement(element: T): void {
//     this._list.push(element);
//   }

//   popElement(): T | undefined {
//     return this._list.pop();
//   }

//   peekElement(): T | undefined {
//     return this._list[this._list.length - 1];
//   }
// }

function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  const result: T[] = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}
