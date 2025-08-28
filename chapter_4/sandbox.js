function greet() {
  console.log(`Hello there!~`);
}

const speak = function(name = 'Luigi', time = 'morning') {
  console.log(`Good ${time} ${name}!~`);
};

const calcArea = function(radius) {
  return 3.14 * radius ** 2;
};

const calcArea2 = radius => 3.14 * radius ** 2;
const greet2 = () => 'Hello, World!';

const bill = (products, tax) => {
  let total = 0;
  for (let i=0; i<products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

const myFunc = (callbackFunc) => {
  callbackFunc(50);
};

myFunc(value => {
  console.log(value);
});

greet();
speak();
speak('Sam');

const area = calcArea(5);
console.log(area);

console.log(bill([10, 15, 30], 0.2));

const ul = document.querySelector('.people');
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = '';

const logPerson = person => {
  html += `<li>${person}</li>`
}

people.forEach(logPerson);
ul.innerHTML = html;
