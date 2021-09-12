class ModuloDeImpressao {
    constructor() {
        this._codigo = 10;
    }

    // uso do escopo léxico para acessar this._codigo 
    imprime(nomes) {
        nomes.forEach((nome) => {
        console.log(`${this._codigo}: ${nome}`);
     });
   }
}

const professores = ['Elias', 'Yuri', 'Gabriel', 'Guilherme', 'Yan'];
const impressao = new ModuloDeImpressao();
impressao.imprime(professores);