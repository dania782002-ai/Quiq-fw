let name: string = 'danya';
let age: number = 23;
let isStudent: boolean = true;

console.log('Name:', name);
console.log('Age:', age);
console.log('Student?', isStudent);

if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are underage.');
}

function greet(user: string): void {
  console.log('Hello, ' + user + '!');
}

greet(name);
let skills: string[] = ['HTML', 'CSS', 'JavaScript'];
console.log('Main skill:', skills[2]);

interface Profile {
  name: string;
  age: number;
  student: boolean;
}

let profile: Profile = {
  name: name,
  age: age,
  student: isStudent,
};

console.log('Profile name is:', profile.name);
