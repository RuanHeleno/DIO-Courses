let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'Teste';
anyEstaDeVolta = 5;

let stringTeste: string = 'verificar';
stringTeste = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTeste2: string = 'agora vai';

if(typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}