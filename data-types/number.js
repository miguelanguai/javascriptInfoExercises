//1. Sum numbers from the visitor
let num1=+prompt("Write first number",0);
let num2=+prompt("Write second number",0);

let sumNums=num1+num2;

let a = document.getElementById("sumNumbers");
a.textContent=sumNums;

//2. Why 6.35.toFixed(1)==6.3?
let b1 = document.getElementById("toFixedA");
b1.textContent=1.35.toFixed(1);
let b2 = document.getElementById("toFixedB");
b2.textContent=6.35.toFixed(1);

//3. Repeat until the input is a number
function readNumber(){
    let input;
    do{
        input = prompt("Please write a number");
    }while(!isFinite(input));

    if (input===""||input===null){
        return null;
    } else return input;
    

}
let repeatInput = readNumber();

let c = document.getElementById("repeatInput");
c.textContent=repeatInput;

//4. An occasional infintie loop
let i =0;
while (i!=10){
    i+=0.2;
}
// no answer in html in this exercise
//answer: i would never equal 10
