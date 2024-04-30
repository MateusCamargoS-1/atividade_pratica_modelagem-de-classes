"use strict";
// Crie uma classe que modele uma bola:
// a. Atributos
//  i. Cor
//  ii. Circunferência
//  iii. Material
// b. Métodos
//  i. Trocar Cor
//  ii. Mostrar cor
class Bola {
    constructor(cor, circunferencia, material) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }
    trocarCor(cor) {
        this.cor = cor;
    }
    mostrarCor() {
        console.log(this.cor);
    }
}
const bola = new Bola('Branca', 20, 'borracha');
bola.mostrarCor();
