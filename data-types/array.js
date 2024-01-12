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
    let arrSum=[];
    let numToSum;
    //adds inputs to array
    while(true){
        numToSum=prompt("A number, please",0);
        if (numToSum===""||numToSum===null|| !isFinite(numToSum)) break;
        arrSum.push(+numToSum);
    }
    //calculates a sum through all the numbers in the array
    let sum=0;
    for (let i of arrSum){
        sum+=i;
    }
    return sum;
}
let arrSum=sumInput();

let sumIn = document.getElementById("sumInput");
sumIn.textContent=arrSum;

//5. A maximal subarray
let arr2=[1,-2,3,4,-9,6];
function getMaxSubSum(arr2){
    let maxSum=0;
    //first from left to right
    
    //then from right to left

    return maxSum;
}

let subArray = document.getElementById("maximalSubarray");
subArray.textContent=arrSum;