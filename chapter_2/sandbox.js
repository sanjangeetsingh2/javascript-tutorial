alert('Hello, World!');
console.log(1);
console.log(2);

let age = 25;
let year = 2019;
console.log(age, year);

age = 30;
console.log(age);

const points = 100;
// points = 50; // Err
console.log(points);

var score = 75;
console.log(75);

console.log('Hello, World!');

let email = 'sanjangeetsingh25@yahoo.com';
console.log(email);

let firstName = 'Sanjangeet';
let lastName = 'Singh';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

console.log(fullName[0]);
console.log(fullName[2]);
console.log(fullName.length);
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);

result = email.lastIndexOf('n');
console.log(result);

result = email.slice(2, 5);
console.log(result);

result = email.substring(4, 10);
console.log(result);

result = email.replace('s', '5');
console.log(result);

let radius = 10;
const pi = 3.14;

// console.log(radius, pi);
console.log(10 / 2);

result = radius % 3;
console.log(result);

result = pi * (radius ** 2);
console.log(result);

result = 5 * (10-3) ** 2;
console.log(result);

let likes = 10;
// likes = likes + 1;
likes++;
likes += 10;
likes --;
likes -= 5;
likes *= 2;
likes /= 2;

console.log(likes);

console.log(5 / 'Hello, World!');
console.log(5 * 'Hello, World!');

result = 'The blog has ' + likes + ' likes.';
console.log(result);

const title = 'Best reads of 2019';
const author = 'Mario';
likes = 30;

result = 'The blog called' + title + ' by ' + author + ' has ' + likes + ' likes.';
console.log(result);

result = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(result);

let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes.</span>
`;
console.log(html);

let ninjas = ['Shaun', 'Ryu', 'Chun-Li'];
ninjas[1] = 'Ken';
console.log(ninjas);
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['Shaun', 'Crystal', 30, 20];
console.log(random);

console.log(ninjas.length);

result = ninjas.join(',');
console.log(result);

result = ninjas.indexOf('Chun-Li');
console.log(result);

result = ninjas.concat(['Crystal', 'Ryu']);
console.log(result);

result = ninjas.push('Ken');
result = ninjas.pop();
console.log(ninjas);

let a;
console.log(a, a + 3, `The variable is ${a}.`);

a = null;
console.log(a, a + 3, `The variable is ${a}.`);

console.log(true, false);

result = email.includes('@');
console.log(result);

let names = ['Mario', 'Luigi', 'Toad'];
result = names.includes('Luigi');
console.log(result);

age = 25;
console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age >= 20);
console.log(age <= 20);
console.log(age == '25');
console.log(age != 25);
console.log(age != '25');
console.log(age === 25);
console.log(age === '25');

let name = 'Shaun';
console.log(name == 'Shaun');
console.log(name == 'shaun');
console.log(name > 'Crystal');
console.log(name > 'shaun');

let score = '100';
score = Number(score)
console.log(score + 1);
console.log(typeof score);

result = Number('Hello!');
console.log(result);

result = String(50);
console.log(result, typeof result);

result = Boolean(100)
console.log(result, typeof result)

result = Boolean(0)
console.log(result, typeof result)

result = Boolean('0')
console.log(result, typeof result)

result = Boolean('')
console.log(result, typeof result)
