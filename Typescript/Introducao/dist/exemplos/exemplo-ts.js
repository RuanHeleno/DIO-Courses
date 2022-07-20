"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somar(a, b, devePrintar, frase) {
    let resultado = a + b;
    if (devePrintar)
        return console.log(frase + resultado);
}
let devePrintar = true;
let frase = 'O valor é: ';
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2)
            somar(Number(input1.value), Number(input2.value), devePrintar, frase);
    });
}
