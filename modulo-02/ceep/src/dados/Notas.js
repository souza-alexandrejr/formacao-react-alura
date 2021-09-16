class Notas {
    constructor() {
        this.notas = [];
    }

    criarNota(titulo, texto, categoria) {
        const nota = new Nota(titulo, texto, categoria);
        this.notas.push(nota);
    }

    deletarNota(indice) {
        this.notas.splice(indice, 1);
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