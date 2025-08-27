for (let i=0; i<5; i++) {
  console.log('In loop: ', i);
}

console.log('Loop finished');

const names = ['shaun', 'mario', 'luigi'];

for (let i=0; i<names.length; i++) {
  // console.log(names[i]);
  let html = `
    <div>
      ${names[i]}
    </div>
  `;
  console.log(html);
}

let i = 0;
while (i < 5) {
  console.log('In loop: ', i);
  i++;
}

i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}

i = 5;
do {
  console.log('In loop:', i);
  i++;
} while (i < 5);

let age = 20;

if (age > 20) {
  console.log('You\'re older than 20 years old.');
}

names.push('ryu');

if (names.length > 3) {
  console.log('That\'s a lot of names.');
}

const password = 'p@ss';

if (password.length >= 12 && password.includes('@')) {
  console.log('That password is very strong.');
} else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
  console.log('That password is strong enough.');
} else {
  console.log('That password is not strong enough.');
}

let user = false;

if (!user) {
  console.log('You must be logged in to continue.');
}

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i=0; i<scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log('Your score: ', scores[i]);

  if (scores[i] === 100) {
    console.log('Congrats, you got the top score!');
    break;
  }
}

const grade = 'D';

switch (grade) {
  case 'A': console.log('You got an A!'); break;
  case 'B': console.log('You got an B!'); break;
  case 'C': console.log('You got an C!'); break;
  case 'D': console.log('You got an D!'); break;
  case 'E': console.log('You got an E!'); break;
  default: console.log('Not a valid grade!');
}

age = 30;

if (true) {
  // age = 40;
  let age = 40;
  console.log('Inside 1st code block: ', age);

  if (true) {
    let age = 50;
    console.log('Inside 2nd code block: ', age);
  }
}

console.log('Outside code block: ', age);
