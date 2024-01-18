"use strict";
//1. Hello, object
let user = {};
user.name="John";
user.surname="Smith";
user.name="Pete";
delete user.name;

let a = document.getElementById("helloObject");
a.textContent=user.toString();

//2. Check for emptiness
function isEmpty(obj){
    for (let prop in obj){
        return false;
    }
    return true;
}
let schedule={};
let noProperties = isEmpty(schedule);

let b = document.getElementById("checkEmptiness");
b.textContent=noProperties;

//3. Sum Object Properties


let a = document.getElementById("helloObject");
a.textContent=user.toString();