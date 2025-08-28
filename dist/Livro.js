class Livro {
    // atributos
    titulo;
    autor;
    paginas;
    // construtor
    constructor(_titulo, _autor, _paginas) {
        this.titulo = _titulo;
        this.autor = _autor;
        this.paginas = _paginas;
    }
    //métodos
    ler(paginasLidas) {
        console.log(`Você leu ${paginasLidas} páginas de "${this.titulo}".`);
    }
    exibirDetalhes() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}`);
    }
}
export default Livro;
//# sourceMappingURL=Livro.js.map