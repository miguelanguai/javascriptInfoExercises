//1. Is array copied
let fruits = ["Apples", "Pear", "Orange"];
// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");
let length=fruits.length;

let isCopied = document.getElementById("isCopied");
isCopied.textContent=length;

//2. Array Operations
let resultArray=[];
let styles = ["Jazz", "Blues"];
resultArray.push(styles);
styles.push("Rock-n-Roll");
styles[styles.length/2]="Classics";
resultArray.push(styles);

let isCopied = document.getElementById("isCopied");
isCopied.textContent=resultArray;