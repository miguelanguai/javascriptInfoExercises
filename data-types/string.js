//1. uppercase the first character
function ucFirst(word) {
    if (!word)return word;
    return word[0].toUpperCase()+word.slice(1);
}
let toUpper=ucFirst("john");//John

let upper = document.getElementById("upper");
upper.textContent=toUpper;

//2. Check for spam
function checkSpam(str){
    if((str.toLowerCase().includes('viagra'))||(str.toLowerCase().includes('xxx'))) return true

    return false;
}
let checkSpa=[checkSpam('buy ViAgRA now'),
checkSpam('free xxxxx'),
checkSpam('innocent rabbit')];

let spam = document.getElementById("spam");
spam.textContent=checkSpa;

//3. Truncate the text
function truncate(str, maxLength){
    if(str.length>maxLength){
        str=str.slice(0,maxLength+1)+"...";
    }return str;
}
let str1="What I'd like to tell on this topic is:";
let str2="hi everyone!";
let resTruncate=[truncate(str1,20),truncate(str2,20),];

let trunc = document.getElementById("trunc");
trunc.textContent=resTruncate;