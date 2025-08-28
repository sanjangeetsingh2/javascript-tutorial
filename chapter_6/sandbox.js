const para = document.querySelector('p');
console.log(para.innerText);

para.innerText = 'Ninjas are awesome!';

const errors = document.querySelectorAll('.error');
console.log(errors);

const title = document.getElementById('page-title');
console.log(title);

const errors2 = document.getElementsByClassName('error');
console.log(errors2);

const paras = document.getElementsByTagName('p');
console.log(paras);

const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.chatgpt.com');
link.innerText = 'ChatGPT';
link.style.color = 'red';
