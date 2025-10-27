let array20 = [];

for (let i = 0; i< 20; i++) {
    array20.push(Math.floor(Math.random() * 10)+1);
}


// ORDENAR DE MENOR A MAYOR
array20.sort((a, b) => a - b);

console.log('MENOR A MAYOR : ', array20);

arrayimpar = [];
arraypar = [];

// PARA RECORRER ARRAY
array20.forEach(i => {
    if (i % 2 === 0) {
        arraypar.push(i);
    } else {
        arrayimpar.push(i);
    }
});

console.log('PARES : ',arraypar);
console.log('IMPARES : ',arrayimpar);


// C , QUITAR EN EL PAR EL ULTIMO Y FINAL, Y EN EL IMPAR LOS CENTRALES
if ( arraypar > 1) {
    arraypar.shift();
    arraypar.pop();
}

let longitud = arrayimpar.length;

if (longitud > 0) {
    if (longitud % 2 === 0) {
        let medio = longitud / 2 - 1;
        arrayimpar.splice(medio, 2)
    } else {
        let mediootro = Math.floor(longitud / 2);
        arrayimpar.splice(mediootro, 2);
    }
}

console.log('ARRAY PAR SIN 1º Y ULTIMO ',arraypar);
console.log('ARRAY IMPAR SIN CENTRALES ',arrayimpar);

// D , SUMAR ELEMENTOS Y MOSTRAR AL FINAL

let sumapar = 0;
let sumaimpar = 0;

arraypar.forEach(i => {
    sumapar = sumapar + i;
});
arrayimpar.forEach(i => {
    sumaimpar = sumaimpar + i;
});

arraypar.push(sumapar);
arrayimpar.push(sumaimpar);
console.log('SUMA PAR :',arraypar,' : ',sumapar);
console.log('SUMA IMPAR :',arrayimpar,' : ',sumaimpar);

let mediapar = sumapar / (arraypar.length+1);
let mediaimpar = sumaimpar / (arrayimpar.length+1);

mediapar = parseInt(mediapar);
mediaimpar = parseInt(mediaimpar);

arraypar.unshift(mediapar);
arrayimpar.unshift(mediaimpar);

console.log('ARRAY PAR CON LA MEDIA EN INICIO : ',arraypar);
console.log('ARRAY PAR CON LA MEDIA EN INICIO : ',arrayimpar);

for (let x = 1; x < arraypar.length; x++) {
    arraypar[x] = arraypar[0] * arraypar[x];
}
for (let x = 1; x < arrayimpar.length; x++) {
    arrayimpar[x] = arrayimpar[0] * arrayimpar[x];
}
console.log('ARRAY PARES MULTIPLICADOS POR SU MEDIA : ',arraypar);
console.log('ARRAY IMPARES MULTIPLICADOS POR SU MEDIA : ',arrayimpar);

let arrayentero = [];
for (let x = 0; x < arraypar.length; x++) {
    arrayentero.push(arraypar[x]);
}
for (let x = 0; x < arrayimpar.length; x++) {
    arrayentero.push(arrayimpar[x]);
}
arrayentero.sort((a, b) => a - b);
console.log('ARRAY FINAL : ',arrayentero);

let sinrepetir = [...new Set(arrayentero)];
console.log('ARRAY SIN REPETIR : ',sinrepetir)
