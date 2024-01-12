//1. Is array copied
let fruits = ["Apples", "Pear", "Orange"];
// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");
let length=fruits.length;

let isCopied = document.getElementById("isCopied");
isCopied.textContent=length;

//2. Array Operations
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.trunc(styles.length/2)]="Classics";
styles.shift();
styles.unshift('Rap','Reggae');

let arrayOp = document.getElementById("resultArray");
arrayOp.textContent=styles;

//3. Calling in an array context
