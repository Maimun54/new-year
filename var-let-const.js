// var let const 
//var : no reason to use var
//let : allow it to reassign
// Const: do not allow it to reassign

const teamM = 5;
//teamM = 10;
const IncreseTeamMember = teamM + 5
console.log(IncreseTeamMember);

let money = 50;
money = 100;
console.log(money);

const numbers = [10,12,14,16]
numbers[1]=11;
numbers.push(18,20)
console.log(numbers)

let team_details = {
    name:' Tania',
    age:'21'
}
team_details ={
    name: 'Rafia'
}
console.log(team_details)