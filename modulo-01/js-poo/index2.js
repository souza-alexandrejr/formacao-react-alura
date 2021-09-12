import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js"

const diretor = new Diretor("Rodrigo", 10000, 11122233344);
diretor.cadastrarSenha("Rodrigo@1234");

const gerente = new Gerente("Ricardo",  5000, 22233344455);
gerente.cadastrarSenha("Ricardo@1234");

const cliente = new Cliente("Laís", 12345678900, "Lais@1234");

const diretorLogado = SistemaAutenticacao.login(diretor, "Rodrigo@1234");
const gerenteLogado = SistemaAutenticacao.login(gerente, "Ricardo@1234");
const clienteLogado = SistemaAutenticacao.login(cliente, "Lais@1234");

console.log(diretorLogado);
console.log(gerenteLogado);
console.log(clienteLogado);
