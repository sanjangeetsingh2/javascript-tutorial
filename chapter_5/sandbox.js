const blogs = [
  { title: "New Horizons", likes: 30 },
  { title: "The Opinion Machine", likes: 50 },
];

let user = {
  name: 'Sanjangeet Singh',
  age: 21,
  email: 'sanjangeetsingh25@yahoo.com',
  location: 'canada',
  blogs,
  login() {
    console.log('The user logged in.');
  },
  logout() {
    console.log('The user logged out.');
  },
  logBlogs() {
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    });
  },
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user['name']);

user['name'] = 'Sam';
console.log(user.name);

user.login();
user.logBlogs();
user.logout();

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

let score1 = 50;
let score2 = score1;

console.log(score1, score2);

score1 = 100;
console.log(score1, score2);

const user1 = { name: 'Ryu', age: 30 };
const user2 = user1;

console.log(user1, user2);

user1.name = 'Sam';
console.log(user1, user2);
