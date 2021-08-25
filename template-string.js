const priya = 'Asif Akbar';
const meye = "meye tumi ki dukkho chino";
const kobita = `kobita tumi shopnocharini hoye khobor nio na`;
const multiline = 'This is my first line. \n' + 'This is my second line.\n' + 'this is my third line';
console.log(multiline);

const multilineNew = `this is multiline
this is second line
this is third line
fourth line`
console.log(multilineNew)


const friends = ['abul', 'kabul', 'babil'];
const count = 5;
const old = '<h3 class="friend-name">friend-5</h3>'
const old2 = '<h3 class="friend-name">friend-' + count + '</h3>';
const old3 = `<h3 class="friend-name">friend-${count}</h3>`;
const new1 = `<h3 class="friend-name">friend-${friends.length}</h3>`;

const first = 'Tasnia';
const last = 'Hossain';
const fullOld = 'This person name is:' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. has money ${friends.length * 35}. She lives in Dinajpur`;

console.log(fullNew);