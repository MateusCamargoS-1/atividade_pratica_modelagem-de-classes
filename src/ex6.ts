// Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.

// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.

class Carro {
    consumo: number;
    qtdCombustivel: number;

    constructor(consumo = 0) {
        this.consumo = consumo;
        this.qtdCombustivel = 0;
    }

    andar(distancia: number) {
        this.consumo = distancia/this.qtdCombustivel;
        this.qtdCombustivel -= this.consumo;
        console.log(`Dirigindo...\nDistanca percorrida: ${distancia}km.\nconsumo:  ${this.consumo} km/L`);
    }

    adicionarGasolina(litro: number) {
        this.qtdCombustivel = litro;
        console.log(`Gasolina adicionada: ${this.qtdCombustivel}L`);
    }

    obterGasolina() {
        console.log(`O nivel tual de gasolina é: ${this.qtdCombustivel}L`);
    }

}

const meuFusca = new Carro(15)
meuFusca.adicionarGasolina(20)
meuFusca.andar(100)
meuFusca.obterGasolina()