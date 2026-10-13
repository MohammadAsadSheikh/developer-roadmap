type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Aman", age: 24 },
  { name: "Sara", age: 31 },
  { name: "Rahul", age: 28 },
  { name: "Priya", age: 22 },
];

// Write code to complete these three tasks:

// 1. Use map() to get an array of all user names.
const allUserName = users.map((user)=> {
    return user?.name;
})
console.log(allUserName) // [ 'Aman', 'Sara', 'Rahul', 'Priya' ]

// 2. Use filter() to get users younger than 30.
const youngerUsers = users.filter((user)=> {
    return user.age < 30
})
console.log(youngerUsers)

// 3. Use reduce() to calculate the total age of all users.
const totalUserAge = users.reduce((sum, user)=> {
    return sum + user.age;
}, 0)
console.log(totalUserAge)