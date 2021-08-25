const numbers = [23, 28, 35, 29, 32];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 28, 35, 99, 54);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);


numbers.push(55);
const numbers2 = [...numbers, 88, 44];
console.log(numbers2);

