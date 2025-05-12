"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function filterByType(arr, type) {
  return arr.filter(function (value) {
    return typeof value === type;
  });
}
var arr = [1, "hello", true, 2, "world", false];
var filteredArr = filterByType(arr, "number");
console.log(filteredArr);
