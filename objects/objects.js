"use strict";
//1. Hello, object
let user = {};
user.name="John";
user.surname="Smith";
user.name="Pete";
delete user.name;

let a = document.getElementById("helloObject");
a.textContent=user.toString();

//1. Check for emptiness
let user = {};
user.name="John";
user.surname="Smith";
user.name="Pete";
delete user.name;

let a = document.getElementById("helloObject");
a.textContent=user.toString();