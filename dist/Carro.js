class Carro {
    // Atributos
    cor;
    modelo;
    ano;
    // Construtor
    constructor(_modelo, _ano, _cor) {
        this.modelo = _modelo;
        this.ano = _ano;
        this.cor = _cor;
    }
    // Métodos
    ligar() {
        console.log(`O carro ${this.modelo} está ligado.`);
    }
    acelerar(velocidade) {
        console.log(`O carro ${this.modelo} está acelerando a ${velocidade} km/h.`);
    }
}
export default Carro;
//# sourceMappingURL=Carro.js.map