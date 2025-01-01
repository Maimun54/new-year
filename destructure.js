const player ={
    name:'Shakib',
    age:35,
    phone:'0187269810',
    money:1111150364
}
const {phone,age,name,money:Dollar}=player

// const name =player.name;
// const Phone =player.phone;
// console.log(name)
console.log(phone)
// console.log(money)
console.log(Dollar)
console.log(age)
console.log(name)

// array destructuring 

const numbers =[10,15,16];

const [num1,num2,x] =numbers;
console.log(x)