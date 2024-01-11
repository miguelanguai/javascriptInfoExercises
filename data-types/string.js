//1. uppercase the first character
function ucFirst(word) {
    if (!word)return word;
    return word[0].toUpperCase()+word.slice(1);
}
let toUpper=ucFirst("john");//John

let upper = document.getElementById("upper");
upper.textContent=toUpper;

//2. Check for spam
