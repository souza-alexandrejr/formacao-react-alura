class Notas {
    constructor() {
        this.notas = [];

        // array de componentes que devem ser notificados
        // quando o array de notas for atualizado
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
            funcao(this.notas)
        });
    }

    criarNota(titulo, texto, categoria) {
        const nota = new Nota(titulo, texto, categoria);
        this.notas.push(nota);
        this.notificar();
    }

    deletarNota(indice) {
        this.notas.splice(indice, 1);
        this.notificar();
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}

export default Notas;