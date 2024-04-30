class Contador {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    zerar() {
        this.valor = 0;
        console.log(this.valor);
    }

    incrementar() {
        this.valor++;
        console.log(this.valor);
    }
}

const zerar = new Contador(2);
zerar.zerar();

const incrementar = new Contador(10);
incrementar.incrementar();
