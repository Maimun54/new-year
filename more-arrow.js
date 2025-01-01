const difference =(a,b)=>a-b;
const multiply =(x,y,z)=>x*y*z;
const getAge=(person)=>person.age;
const student={
    name:'Rafia',
    age:20
}
const age=getAge(student);
console.log(age)

const getThirdNum= numbers=>numbers[2];
const numbers=[5,6,8,9,10]
const third =getThirdNum(numbers)
console.log(third)

// no parameter 

const getPI =()=>Math.PI
console.log(getPI());
// 

const cal =(x,y,z,M)=>{
    const sum = x+y+M;
    const multiply = x*y*z;
    const result = sum + multiply;
    return result;
}
