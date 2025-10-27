// Pido cuántos comensales vamos a tener en total y lo guardo en una variable
let comensales = Number(prompt("Con cuantos comensales vamos a contar?"))

// Dejo una variable "restantes" para ir restando los que ya he contado (mayores y menores)
let restantes = comensales

// Inicializo contadores para menores y mayores de edad (específicamente >65)
let menores = 0;
let mayores = 0;

// Empiezo un bucle infinito para preguntar cuántos son mayores de 65 años
while(true) {
    mayores = Number(prompt("Cuantos mayores de 65 años?"))
    // Si la cantidad que me dan no supera el total de comensales, lo acepto y salgo del bucle
    if(mayores <= restantes) {
        restantes = restantes - mayores;  // Resto los mayores del total
        break;  // Salgo del bucle porque ya tengo un número válido
    }
    else {
        alert('Error.')  // Si se pasan, les aviso y vuelvo a preguntar
    }
}

// Ahora hago lo mismo pero para los menores de 10 años
while(true) {
    menores = Number(prompt("Cuantos son menores de 10 años?"))
    // Si no superan los que quedan (después de restar los mayores), lo acepto
    if(menores <= restantes) {
        restantes = restantes - menores;  // Resto también los menores
        break;  // Y salgo del bucle
    }
    else {
        alert('Error.')  // Si no, error y repito
    }
}

// Calculo cuántos adultos quedan (total menos los niños, porque los mayores de 65 ya están incluidos en "adultos" para el menú)
let adultos = comensales - menores

// Defino los precios de los menús
let menudia = 12.5;
let menupremium = 17.45;
let menubuffet = 23.85;
let menuInfantil = 9.25;

// Muestro en consola las opciones de menú con sus precios (sin IVA)
console.log('Estas son las opciones del menú')
console.log('1. Menú del dia --> ' +menudia)
console.log('2. Menú del dia PREMIUM --> ' +menupremium)  
console.log('3. Menú Buffet Libre --> ' +menubuffet)
console.log('NOTA: Todos los precios van sin IVA')

// Variables para guardar cuántos eligen cada menú
let diario;
let premium;
let buffet;

// Contador para mostrar cuántos menús ya se han elegido
let contador = 0;

// Empiezo un bucle para asignar menús a los adultos
while(true){
    // Le digo al usuario cuántos lleva y cuántos le quedan por asignar
    console.log('De momento llevas 0 menús elegidos...')
    console.log('Te quedan '+adultos+' por elegir...')

    // Pido cuántos quieren el menú diario, y no dejo que elijan más de los que quedan
    do {
        diario = Number(prompt('¿Cuanto comensales quieren el menu diario?\n 1. Menú del dia --> ' +menudia))
        if (diario > adultos || diario < 0) {
            alert('Numero erroneo')  // Si se pasan o ponen negativo, error
        }
    } while (diario > adultos)  // Repito hasta que den un número válido

    adultos = adultos - diario;  // Resto los que eligieron menú diario

    // Si ya no quedan adultos, pongo el resto de menús en 0 y salgo
    if (adultos === 0) {
        premium = 0;
        buffet = 0;
        break;
    }

    // Sumo al contador los menús diarios elegidos
    contador = contador + diario;
    // Le aviso cuántos lleva y cuántos le quedan
    alert('De momento llevas '+contador+' menús elegidos... \n Te quedan '+adultos+' por elegir...')

    // Ahora pregunto por los menús premium, con la misma lógica
    do {
        premium = Number(prompt('¿Cuanto comensales quieren el menu premium?\n 2. Menú PREMIUM --> ' +menupremium))
        if (premium > adultos || premium < 0) {  
            alert('Numero erroneo')
        }
    } while (premium > adultos)

    adultos = adultos - premium;

    if (adultos === 0) {
        buffet = 0;
        break;
    }

    contador = contador + premium
    alert('De momento llevas '+contador+' menús elegidos... \nTe quedan '+adultos+' por elegir...')

    // Por último, pregunto por el buffet
    do {
        buffet = Number(prompt('¿Cuanto comensales quieren el menu buffet?\n 3. Menú Buffet --> ' +menubuffet))
        if (buffet > adultos || buffet < 0) {
            alert('Numero erroneo')
        }
    } while (buffet > adultos)

    adultos = adultos - buffet;

    if (adultos === 0) {
        break;
    }

    contador = contador + buffet
    alert('De momento llevas '+contador+' menús elegidos... \n Te quedan '+adultos+' por elegir...')
}

// Muestro un resumen de lo elegido: total de comensales, niños, adultos, y desglose de menús
alert('Contamos con un total de '+comensales+' comensales: '+menores+' niños y '+adultos+' adultos.\nLos menús que se servirán son los siguientes: \n'+diario+' menús diarios \n'+premium+' menús premiums \n'+buffet+ ' menús de Buffet \n' +menores+ ' menús infantiles.')

// Aviso que los mayores de 65 tendrán un 15% de descuento, aplicado a los menús más baratos primero
alert('Debe saber que '+mayores+' menús se beneficiarán de un 15% de descuento,\nrespecto al menú de adultos por ser mayores de 65 años\nNOTA: El descuento será aplicado a los menús más económicos') 

// Recuerdo que los menús infantiles tienen precio fijo
alert('Los menús infantiles tienen un precio de 9.25€ + IVA\nEn su caso, se le aplicará este precio a '+menores+' comensales')

// Preparo variables para aplicar el descuento a los mayores: voy a repartirlo empezando por el menú más barato
let mayoresDescuento = mayores; 
let diarioDescuento = 0;        
let premiumDescuento = 0;       
let buffetDescuento = 0;        

// Primero intento aplicar el descuento a los menús diarios (los más baratos)
if (mayoresDescuento > 0 && diario > 0) {
    diarioDescuento = Math.min(mayoresDescuento, diario);  // Aplico descuento a tantos como pueda (sin pasarme)
    mayoresDescuento -= diarioDescuento;  // Resto los que ya usé el descuento
}

// Luego, si aún quedan mayores con descuento, lo aplico al premium
if (mayoresDescuento > 0 && premium > 0) {
    premiumDescuento = Math.min(mayoresDescuento, premium);
    mayoresDescuento -= premiumDescuento;
}

// Finalmente, si aún queda, al buffet
if (mayoresDescuento > 0 && buffet > 0) {
    buffetDescuento = Math.min(mayoresDescuento, buffet);
    mayoresDescuento -= buffetDescuento;
}

// Defino el porcentaje de descuento (15%)
const descuentoPorcentaje = 0.15;

// Calculo el total de cada tipo de menú, aplicando el descuento donde corresponde
let totalDia = (diario - diarioDescuento) * menudia + diarioDescuento * menudia * (1 - descuentoPorcentaje);
let totalPremium = (premium - premiumDescuento) * menupremium + premiumDescuento * menupremium * (1 - descuentoPorcentaje);
let totalBuffet = (buffet - buffetDescuento) * menubuffet + buffetDescuento * menubuffet * (1 - descuentoPorcentaje);
let totalInfantil = menores * menuInfantil;

// Sumo todo sin IVA
let totalSinIVA = totalDia + totalPremium + totalBuffet + totalInfantil;

// Calculo el IVA (10%)
let eliva = totalSinIVA*0.10;

// Sumo el IVA al total
let conIVA = totalSinIVA+eliva;

// Preparo un string con el resumen final bonito para mostrar
let fianl=`  
Los menús que se servirán son los siguientes:

`+diario+` menús del dia x `+menudia+`........`+totalDia+`
`+premium+` menús premiums x `+menupremium+`........`+totalPremium+`
`+buffet+` menús de buffets x `+menubuffet+`........`+totalBuffet+`
`+menores+` menús infantiles x `+menuInfantil+`............`+totalInfantil+`  
Total....................................`+totalSinIVA+`
IVA 10%...............................`+eliva+`
TOTAL IVA INCLUIDO..................`+conIVA+`
`

// Muestro el resumen final con todos los cálculos
alert(fianl);