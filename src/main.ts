import Aluno from "./Aluno.js";
import Carro from "./Carro.js";
import Livro from "./Livro.js";

let aluno1: Aluno = new Aluno("Renan", 20251234, "Economia");
let aluno2: Aluno = new Aluno("Maria", 20251235, "Educação Física");

aluno1.estudar("Juros Compostos");
aluno2.estudar("Anatomia");

aluno1.entregarAtividade();
aluno2.entregarAtividade();

;
let carro1: Carro = new Carro("Honda Civic", 2021, "Preto");

let ligado: boolean = carro1.ligar();

if (ligado) {
    carro1.acelerar(150);
} else {
    console.log("O carro não conseguiu ligar.");
}

let carro2: Carro = new Carro("Ford Mustang", 2020, "Vermelho");

let ligado2: boolean = carro2.ligar();
if (ligado2) {
    carro2.acelerar(200);
} else {
    console.log("O carro não conseguiu ligar.");
}


let livro1: Livro = new Livro("1984", "George Orwell", 1949);
let livro2: Livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);

livro1.exibirDetalhes();
livro2.exibirDetalhes();

livro1.ler(45);
livro2.ler(100);