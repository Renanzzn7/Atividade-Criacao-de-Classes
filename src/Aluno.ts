class Aluno {
    // atributos
    private nome: string;
    private matricula: number;
    private curso: string;
 
    // construtor
    constructor(
       _nome: string,
       _matricula: number,
       _curso: string
    ) {
       this.nome = _nome;
       this.matricula = _matricula;
       this.curso = _curso;
    }
     //métodos
    public estudar(materia: string): void {
       console.log(`${this.nome} está estudando ${materia}.`);
    }
    public entregarAtividade(): void {
      console.log(`${this.nome} entregou a atividade.`);
   }
}
 
 export default Aluno;