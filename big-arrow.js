const add = (num1, num2) => num1 + num2;
const sum = add(28, 35);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(28, 35, 28);

const fiveTimes = (num) => num * 5;
const output = fiveTimes(28);

const tenTimes = num => num * 10;
const output2 = tenTimes(28);

const getName = () => 'Tasnia Tonni';
const fullName = getName();


console.log(sum);
console.log(result);
console.log(output);
console.log(output2);
console.log(fullName);



const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output3 = result * 5;
    return output3;
}
const total = doMath(35, 28);
console.log(total);