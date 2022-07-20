"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissao2;
(function (Profissao2) {
    Profissao2[Profissao2["Atriz"] = 0] = "Atriz";
    Profissao2[Profissao2["Padeiro"] = 1] = "Padeiro";
})(Profissao2 || (Profissao2 = {}));
const pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao2: Profissao2.Atriz
};
const pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao2: Profissao2.Padeiro
};
const pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao2: Profissao2.Atriz
};
const pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao2: Profissao2.Padeiro
};
