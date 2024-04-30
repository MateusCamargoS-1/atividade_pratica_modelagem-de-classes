// Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro
// iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.
// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.

// ---------------------------------------------------------------------------------------

// a) Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro
// iii. quantidadeCombustivel

class BombaCombustivel {
    tipoCombustivel: string;
    valorLitro: number;
    quantidadeCombustivel: number;
    quantidadeCombustivelBomba: number;

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
        this.quantidadeCombustivelBomba = 200;
    }

    // B) Possua no mínimo esses métodos:
    // i. abastecerPorValor() – método onde é informado o
    // valor a ser abastecido e mostra a quantidade de litros
    // ii. abastecerPorLitro() – método onde é informado a
    // quantidade em litros de combustível e mostra o valor a
    // ser pago pelo cliente.
    // iii. alterarValor() – altera o valor do litro do combustível.
    // iv. alterarCombustivel() – altera o tipo do combustível.
    // v. alterarQuantidadeCombustivel() – altera a
    // quantidade de combustível restante na bomba.
    // que foi colocada no veículo

    abastecerPorValor(valorAbastecimento: number) {
        const qtdlistros = valorAbastecimento / this.valorLitro;
        if (this.quantidadeCombustivelBomba >= qtdlistros) {
            let valorString = valorAbastecimento.toString()
            valorString = valorString.replace(/\./g, ',');
            console.log(`Tipo Combustivel: ${this.tipoCombustivel}`);
            console.log(`Valor combustivel: ${this.valorLitro}.`);
            console.log(`Abastecendo: R$${valorString}.`);
            console.log(`Foi abastecido ${qtdlistros.toFixed(2)}L`);
            this.quantidadeCombustivelBomba -= qtdlistros;
        } else {
            console.log('Quantidade de combustivel na Bomba é insuficiente para abastecer seu veiculo!');
        }
    }

    abastecerPorLitro(qtdLitroAbastecer: number) {
        if (this.quantidadeCombustivelBomba >= qtdLitroAbastecer) {
            let valorTotal: string = (qtdLitroAbastecer * this.valorLitro).toFixed(2);
            valorTotal = valorTotal.replace(/\./g, ',');
            console.log(`Tipo Combustivel: ${this.tipoCombustivel}`);
            console.log(`Valor combustivel: ${this.valorLitro}.`);
            console.log(`Abastecendo: ${qtdLitroAbastecer}L.`);
            console.log(`Foi abastecido: R$${valorTotal}.`);
            this.quantidadeCombustivelBomba -= qtdLitroAbastecer;
        } else {
            console.log('Quantidade de combustivel na Bomba é insuficiente para abastecer seu veiculo!');
        }
    }

    alterarValor(valorAlterado: number) {
        this.valorLitro = valorAlterado;
    }

    alterarCombustivel(tipoCombustivelAlterado: string) {
        this.tipoCombustivel = tipoCombustivelAlterado;
    }

    alterarQuantidadeCombustivel(quantidadeCombustivelBombaAlterado: number) {
        this.quantidadeCombustivelBomba += quantidadeCombustivelBombaAlterado;
    }

}

const abastecimento1 = new BombaCombustivel('gasolina', 5.44, 20);

abastecimento1.abastecerPorValor(110);
console.log('');
abastecimento1.abastecerPorLitro(201);
console.log('');
abastecimento1.alterarQuantidadeCombustivel(200);
console.log(abastecimento1);