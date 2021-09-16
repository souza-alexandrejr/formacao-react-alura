class Categorias {
    constructor() {
        this.categorias = [];
    }

    adicionarCategoria(nome) {
        console.log(this.categorias);
        this.categorias.push(nome);
    }
}

export default Categorias;