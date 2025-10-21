let name = 'danya';
let age = 23;
let isStudent = true;

console.log('Name:', name);
console.log('Age:', age);
console.log('Student?', isStudent);

if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are underage.');
}

function greet(user) {
  console.log('Hello, ' + user + '!');
}

greet(name);

let skills = ['HTML', 'CSS', 'JavaScript'];
console.log('Main skill:', skills[2]);

let profile = {
  name: name,
  age: age,
  student: isStudent,
};

console.log('Profile name is:', profile.name);
