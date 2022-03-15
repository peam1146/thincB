interface Person {
  name: string;
  age: number;
}

const persons: Person[] = [
  {
    name: "Peam",
    age: 19,
  },
  {
    name: "John",
    age: 40,
  },
  {
    name: "John2",
    age: 50,
  },
  {
    name: "John4",
    age: 24,
  },
  {
    name: "John5",
    age: 28,
  },
];
// forEach
persons.forEach((v, index) => {
  console.log(v.name, v.age);
});

// reduce
// เปรียบเทียบกับใช้ forEach กับ for loop
// let sum = 0;
// persons.forEach((v, index) => {
//   sum += v.age;
// });
// console.log(sum);

// let sum = 0;
// for (let i = 0; i < persons.length; i++) {
//   sum += persons[i].age;
// }
// console.log(sum);

const ageSum = persons.reduce((prev, curr) => prev + curr.age, 0);
console.log(ageSum);

// map
// เทีบกับใช้ ​for loop
// const newPerson:Person = [];
// for (let i = 0; i < persons.length; i++) {
//   push เหมือน append ของ python
//   newPerson.push({
//     name: persons[i].name,
//     age: persons[i].age + 10,
//   });
// }
// console.log(newPerson);

const newPerson = persons.map((v) => {
  return {
    name: v.name,
    age: v.age + 10,
  };
});
console.log(persons);
console.log(newPerson);
