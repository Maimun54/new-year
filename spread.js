const max = Math.max(5,10,45,56)
const min =Math.min(5,10,45,56)
const numbers =[3,4,6,7,8,40,45,100]
// console.log(...numbers)
const highest =Math.max(...numbers);
// console.log(highest)
// console.log(max);
// console.log(min);


const friends =[10,12,14,15];
const justFriends = friends;
const bestF=[...friends]
friends.push(420)
console.log(bestF)
console.log(friends)