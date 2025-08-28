class Aluno {
    // atributos
    nome;
    matricula;
    curso;
    // construtor
    constructor(_nome, _matricula, _curso) {
        this.nome = _nome;
        this.matricula = _matricula;
        this.curso = _curso;
    }
    //métodos
    estudar(materia) {
        console.log(`${this.nome} está estudando ${materia}.`);
    }
    entregarAtividade() {
        console.log(`${this.nome} entregou a atividade.`);
    }
}
export default Aluno;
//# sourceMappingURL=Aluno.js.map