function formatInput(input: string | number) {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * 10;
  }
}

type Status = "success" | "error" | "warning";
function getStatus(status: Status): string {
  if (status === "success") {
    return "All good";
  } else if (status === "error") {
    return "There is an error";
  } else {
    return "There is a warning";
  }
}

type Person = { name: string };
type Age = { age: number };
type PersonWithAge = Person & Age;

function nameAge(person: PersonWithAge): string {
  return `${person.name} ${person.age}`;
}
