// function add(a,b){
//     const result = a+b;
//     return result
// }
// function declaration
function add(a,b){
   
    return a+b;
}

// function expression 
const add2 = function(num1,num2){
    return num1+num2;
}
//Arrow Function
const add3 =(num1,num2)=> num1+num2;

const sum = add3(40,40)
console.log(sum)


const Point =(c,d)=>c+d;
const result =Point(20,1);
console.log(result)
