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
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
});
arr[2](); // ?

let arrayCalling = document.getElementById("context");
arrayCalling.textContent=arr;

//4. Sum input numbers
function sumInput(){
    let arrSum
    do{
        //asks for inputting a number
        let numToSum = prompt("Please, input a number");
        //inputs the number on an array


        
    }while(true);

}
let arrSum=sumInput();
arrSum=2;
let sumInput = document.getElementById("sumInput");
arrayCalling.textContent=arrSum;
