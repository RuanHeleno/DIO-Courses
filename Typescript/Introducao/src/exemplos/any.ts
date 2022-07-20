let valorAny: any;
valorAny = 3;
valorAny = 'ola';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;
let valorString2: string = 'teste2';
valorString2 = valorAny;

function somarString(string: string, string2: string) {
    console.log(string + string2);
}

somarString(valorString, valorString);
somarString('Olá', ', como vai?');