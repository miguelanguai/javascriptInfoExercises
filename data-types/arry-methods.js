//Ejercicios de Dani en clase
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

console.log(us);
console.log(us2);

