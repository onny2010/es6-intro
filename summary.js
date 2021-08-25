let priyoPerson = 'Tasnia Hossain';
const hubby = 'Tazmin Ahmed';

// default parameter
function getName(first, last = 'Onny') {
    return first + ' ' + last;
}
// template string
const myPeople = `My people are ${hubby} and his fullName is ${getName('Onny')}.My name is ${priyoPerson}.`

console.log(myPeople);

// arrow function
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / y;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}
// console.log(bigArrowFunc);


// spread operator
const numbers = [2, 4, 76, 44, 66];
const min = Math.min(...numbers);
console.log(min)