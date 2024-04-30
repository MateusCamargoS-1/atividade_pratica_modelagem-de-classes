// Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

class Calculadora {
    historico: string[];

    constructor() {
        this.historico = [];
    }

    somar(num1: number, num2: number) {
        let soma = num1 + num2;
        console.log(`A soma de ${num1} + ${num2}: ${soma}`);
        this.historico.push(`${num1} + ${num2} = ${soma}`);
    }

    imprimirHistorico() {
        console.log(this.historico);
    }       

}

const soma = new Calculadora();