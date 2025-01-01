function add(num1=0,num2=0){
    const result = num1+num2;
          console.log(num1,num2,result)
    return result
}
const sum = add(8)
//const point =add(10,1)

function fullName(First,last=""){
    const full =First+" "+last;
    console.log(full);
    return full;
}
const Person =fullName("Maimun");

// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed