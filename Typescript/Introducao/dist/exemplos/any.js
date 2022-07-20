"use strict";
let valorAny;
valorAny = 3;
valorAny = 'ola';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'teste2';
valorString2 = valorAny;
function somarString(string, string2) {
    console.log(string + string2);
}
somarString(valorString, valorString);
somarString('Olá', ', como vai?');
