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
          categorias={ this.categorias.categorias }
          criarNota={ this.notas.criarNota }
        />
        <main className="conteudo-principal">
            <ListaDeCategorias 
              categorias={ this.categorias.categorias }
              adicionarCategoria={ this.categorias.adicionarCategoria }  
            />
            <ListaDeNotas 
              apagarNota={ this.notas.deletarNota } 
              notas={ this.notas.notas }
            />
        </main>        
      </section>   
    );
  }
}

export default App;
