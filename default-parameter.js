function add(num1, num2 = 35) {
    // option 2
    // num2 = nume|| 0;
    // option 1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(28);
console.log(result);


function fullName(first, last = 'Hossain') {
    const name = first + ' ' + last;
    return name;
}

const personeName = fullName('Tasnia');
console.log(personeName);