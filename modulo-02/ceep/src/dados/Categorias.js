class Categorias {
    constructor() {
        this.categorias = [];

        // array de componentes que devem ser notificados
        // quando o array de categorias for atualizado
        this._inscritos = [];
    }

    inscrever(funcao) {
        this._inscritos.push(funcao);
    }

    desinscrever(funcao) {
        this._inscritos = this._inscritos.filter((func) => {
            return func !== funcao;
        })
    }

    notificar() {
        // para cada elemento do array, 
        // será executada a função passada como parâmetro
        this._inscritos.forEach((funcao) => {
            funcao(this.categorias)
        });
    }

    adicionarCategoria(nome) {
        this.categorias.push(nome);
        this.notificar();
    }
}

export default Categorias;