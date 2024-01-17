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