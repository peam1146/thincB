// variable declaration
var x = 1;
let y = 2;
const z = 3;

// basic data types
let a = 1;
let b = 1.0;
let c = "1";
let d = true;

// type any
let e: any;
e = 1.0;
e = true;

// union type
let f: number | string = 1;
f = "1";

// array
let array: (string | number)[] = [1, 2, 3];
array[2] = "3";

// dict / interface
let dict = {
  a: 1,
  b: 2,
};

// interface
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "Peam",
  age: 18,
};

const array2 = [1, 2, 3, 4];
for (let i of array2) {
  console.log(i);
}

const car = {
  color: "red",
  brand: "BMW",
  speed: "120km/h",
};

for (let i in car) {
  console.log(i);
}
