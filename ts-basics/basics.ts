//Primitives: number, string, boolean, null, undefined
//Complex types: array, object
//Function types, parameters

//Primitives

let age: number = 12;

let userName: string = "Nick";
let isInstructor: boolean = false;

// More complex types

let hobbies: string[] = ["tennis", "music"];

// Type alias
type Person = { name: string; age: number };

let person: Person;

person = { name: "Nick", age: 28 };

// person = { isPerson: false }; NOT valid due to type definition

let people: Person[];

people = [person];

// Type inference

let course = "React Guide";
// course = 12; error due to automatic type inference

// Union types
let id: string | number = "someId";
id = 12;

// Functions & types

function addSmth(a: number, b: number) {
  return a + b; // infere a type of return value
}

function printSmth(value: any) {
  console.log(value); // here return type is void
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoNumericArray = [1, 2, 3];
const updatedNumericArray = insertAtBeginning(demoNumericArray, 0); // [0,1,2,3]

const demoStingArray = ["b", "c"];
const updatedStingArray = insertAtBeginning(demoStingArray, "a"); // ['a', 'b', 'c']
