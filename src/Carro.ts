class Carro {
    // Atributos
    private cor: string;
    private modelo: string;
    private ano: number;

    // Construtor
    constructor(
        _modelo: string,
        _ano: number,
        _cor: string
    ) {
        this.modelo = _modelo;
        this.ano = _ano;
        this.cor = _cor;
    }
    // Métodos
    public ligar(): boolean {
        const numeroAleatorio = Math.random();
        if (numeroAleatorio > 0.5) {
        return true;
        } else {
        return false;
        }
    }
    public acelerar(velocidade: number): void {
        console.log(`O carro ${this.modelo} está acelerando a ${velocidade} km/h.`);
    }
}
  

export default Carro;