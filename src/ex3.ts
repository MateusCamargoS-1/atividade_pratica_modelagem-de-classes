// Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.

class Sicredi {
    numeroConta: number;
    nome: string;
    saldo: number;

    constructor(numeroConta: number, nome: string, saldo: number = 0) {
        this.numeroConta = numeroConta;
        this.nome = nome;
        this.saldo = saldo;
    }

    alterarNome(novoNome: string) {
        this.nome = novoNome;
    }

    depositar(deposito: number) {
        this.saldo = deposito;
    }


    sacar(saque: number) {
        if(this.saldo === 0) {
            console.log('Valor indisponivel na conta!');
            return
        }

        this.saldo -= saque;
    }
}

const cliente1 = new Sicredi(1234124, 'Mateus', 1000);
const cliente2 = new Sicredi(3213123, 'José', 100);
const cliente3 = new Sicredi(3213123, 'José');

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);