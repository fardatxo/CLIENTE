/***************************************
 *********DECLARACIÓN CON CONST*********
 ***************************************/
console.log("-----CONSTANTES-----");
//No se puede reasignar el valor
const curso = "2DAW";
//curso = "2DAM";
console.log(curso);//Da error


//Deben inicializarse en su declaración
//const precio; 
const descuento = 35; //NO da error
console.log(descuento);


/***************************************
 *************SCOPE DE CONST************
 ***************************************/

 const cliente = "Natalia";
 const login = false;

 function mostrarCte(){
    const cliente = "Pedro";
    console.log(cliente);

    if (login){
        const cliente = "Admin";
        console.log(cliente);
    }
 }
 mostrarCte();

 


