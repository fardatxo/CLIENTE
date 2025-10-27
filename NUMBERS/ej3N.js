let num = prompt('Introduce el número:')

while(!num.includes('0x') || !num.includes('0b') || !num.includes('Oo')){
    alert('Debes indicar el formato (0x, 0b, 0o)');
    num = prompt('Indica el número')
    if(num < 0 || num.includes('-')) {
        alert('Debe de ser positivo');
    }
    if(num.includes('0x') || num.includes('0b') || num.includes('Oo') && num > 0 && num.includes('-')) {
        alert('Debe de ser positivo.')
        num = prompt('Indica el número')
        if(num.includes('0x') || num.includes('0b') || num.includes('Oo') && !num.includes('-')) {
            break;
        }
    }
}

num = num.slice(0,1);
console.log(num);
function decimal() {

} 
function binario() {

}
function hexadecimal() {

}