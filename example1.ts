export {}

// const personDescription = (name, city, age) =>
//   `
// ${name}
// lives in
// ${city}
// . he's
// ${age}
// . In 10 years he'll be
// ${age + 10}
// `;
// console.log(personDescription("Germán", "Buenos Aires", 29));
// console.log(personDescription("Germán", "Buenos Aires", "29"));

// const personDescription = (name: string, city: string, age: number) =>
//   `
// ${name}
// lives in
// ${city}
// . he's
// ${age}
// . In 10 years he'll be
// ${age + 10}
// `;
// console.log(personDescription("Germán", "Buenos Aires", "29"));

function filterByType<T>(arr: T[], type: string): T[] {
  return arr.filter((value) => typeof value === type);
}
let arr = [1, "hello", true, 2, "world", false];
let filteredArr = filterByType(arr, "string");
