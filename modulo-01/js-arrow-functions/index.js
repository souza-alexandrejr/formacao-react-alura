class ModuloDeImpressao {
    constructor() {
        this._codigo = 10;
    }

    // retorno TypeError pois this._codigo não faz parte
    // do contexto da função passada no forEach
    imprime(nomes) {
        nomes.forEach(function(nome){
        console.log(`${this._codigo}: ${nome}`);
     }.bind(this));
   }
}

const professores = ['Elias', 'Yuri', 'Gabriel', 'Guilherme', 'Yan'];
const impressao = new ModuloDeImpressao();
impressao.imprime(professores);