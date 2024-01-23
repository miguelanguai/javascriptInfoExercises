/*
//aqui los ejercicios improvisados de Dani en clase
us = [{ n: 'Teo', a: 2 }, { n: 'Óscar', a: 10 }, { n: 'Ángel', a: 20 }, { n: 'anonymoys', a: Infinity }, { n: 'Alí', a: 10 },];

//nuevo array escupido, sin modificar el original, con usuarios mayores de edad
//dividido en pasos para simplificar el proceso

//primer paso: crear un array no vinculado con filter
us.filter(()=>true);
//2º: filtrar los usuarios cuyo nombre contiene la e
us.filter(u=> u.n.includes('e'));
//3º: filtrar por los usuarios cuyo nombre contiene la e y son mayores de edad
us.filter(u=> u.n.includes('e') && u.a>= 18);

//nuevo array escupido, que nos quedemos con los que tienen nombres que tienen
//a, mayuscula o minuscula, sin acento
//1º: filtrar los usuarios cuyo nombre contiene la a
us.filter(u=> u.n.includes('a'));
//2º: filtrar los usuarios cuyo nombre contiene la a y la A
us.filter(u=> u.n.includes('a') || u.n.includes('A'));
//3º: como antes pero que escale

//ahora que los nombres de cada objeto estén en mayuscula
//1º: map a todos
us.map(i=>i.n.toUpperCase());
//2º: genero un objeto nuevo a partir del original y el original no cambia
us.map(i=>({n:i.n.toUpperCase(), a:i.a}));

//solucion a 
us.map(u=>{
  const uNew = structuredClone(u);
  uNew.n=uNew.n.toUpperCase();
  return uNew;
})

//solucion a ejercicios de casa
//un us2 que esté ordenado alfabéticamente por nombre
us.slice().sort((u1,u2)=>u1.a>u2.a).reverse();

//un us3 que esté ordenado por edad de mayor a menor
//una manera de hacerlo
us.slice().sort((u1,u2)=>u1.a > u2.a);

//un us4 que esté ordenador por nombre con locale de menor a mayor


//12Enero
//uno que no haga in place que ordene de mayor a menor por nombre y de mayor a
//menor por edad
us.slice().sort((u1,u2)=>
  u1.a !== u2.a ? u1.a > u2.a : u1.n > u2.n
  );
//otra opcion en la que se hace cada sort por separado
us.slice().sort((u1,u2)=>u1.n>u2.n)
  .sort((u1,u2)=>u1.a>u2.a);
//ordenar por nombre de menro a mayor
us.slice().sort((u1,u2)=>
  u1.localeCompare(u2.n, 'es'));


//ordenar por nombre de menro a mayor con sensibilidad alfabeto español
us.slice().sort((u1,u2)=>
  u1.localeCompare(u2.n, 'es', {sensitivity: 'base'}));


console.log(us);
console.log(us2);
*/

//Aqui los ejercicios
"use strict";

//1. Translate border-left-width to borderLeftWidth
function camelize(str){
  //put into an array every word separated by hyphen
  let arrCam=str.split("-");
  //upperCase every first character of each key (except key 0)
  arrCam=arrCam.map((word, index)=>index==0?word:word[0].toUpperCase() + word.slice(1));
  //joins the elements of the array
  arrCam=arrCam.join('');
  return arrCam;
}
let aDone = camelize("background-color");

a = document.getElementById("translatedBorder");
a.textContent=aDone;

//2. Filter range
function filterRange(arr,a,b){
  let arrFiltered;
  //filtrar 
  arrFiltered=arr.filter(it=>(it>=a&&it<=b));

  return arrFiltered;
}
let arrFilterRange=[5,3,8,1];
let filtered = filterRange(arrFilterRange,1,4);

let b = document.getElementById("filterRange");
b.textContent=filtered;

//3. Filter range "in place"
function filterRangeInPlace(arr,a,b){
  for (let i=0;i<arr.length;i++){
    if(arr[i]<a||arr[i]>b){
      arr.splice(i,1);
      i--;
    }
  }

}
let arrFilterRangeInPlace=[5,3,8,1];
filterRangeInPlace(arrFilterRangeInPlace,1,4);

c = document.getElementById("filterRangeInPlace");
c.textContent=arrFilterRangeInPlace;

//4. Sort in decreasing order
let arrSortDecOrder=[5,2,1,-10,8];
let arrDecreased=arrSortDecOrder.sort((a,b)=>b-a);

let d = document.getElementById("sortDecreasingOrder");
d.textContent=arrDecreased;

//5. Copy and sort array
function copySorted(arr){
  let collator = new Intl.Collator('es');
  arr.slice().sort(collator.compare);//using collator, not sort
  return arr;
}
let arrCopyAndSort=["HTML", "JavaScript", "CSS"];
let arrCopAndSorted=copySorted(arrCopyAndSort);

e = document.getElementById("copySortArray");
e.textContent=arrCopAndSorted;

//6. Create an extendable calculator
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };
  this.calculate = function(str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

f = document.getElementById("copySortArray");
f.textContent=arrCopAndSorted;

//7. Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(item=>item.name);

let g = document.getElementById("copySortArray");
g.textContent=names;

//8. Map to objects
let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john2, pete2, mary2 ];

let usersMapped = users2.map(user2=>({
  fullName:user2.name+" "+user2.surname,
  id:user2.id
}))

h = document.getElementById("copySortArray");
h.textContent=usersMapped;
