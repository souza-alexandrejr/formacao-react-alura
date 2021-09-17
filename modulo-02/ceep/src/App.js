import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/index";
import ListaDeNotas from "./components/ListaDeNotas/index";
import ListaDeCategorias from "./components/ListaDeCategorias/index";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias";
import Notas from "./dados/Notas";

class App extends Component {
  constructor(props) {
    super();

    // padrão de projeto Observable
    this.categorias = new Categorias();
    this.notas = new Notas();
  }

  /*
    sem o state, os novos dados são salvos nas classes 
    que servem como fonte de dados, sem renderizar automaticamente
    todos os componentes que dependem dele.
  */

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={ this.categorias }
          criarNota={ this.notas.criarNota.bind(this.notas) }
        />
        <main className="conteudo-principal">
            <ListaDeCategorias 
              // passando o objeto inteiro para se ter acesso aos métodos
              categorias={ this.categorias } 
              adicionarCategoria={ this.categorias.adicionarCategoria.bind(this.categorias) }  
            />
            <ListaDeNotas 
              apagarNota={ this.notas.deletarNota.bind(this.notas) } 
              notas={ this.notas }
            />
        </main>        
      </section>   
    );
  }
}

export default App;
