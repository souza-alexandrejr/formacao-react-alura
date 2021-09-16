import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/index";
import ListaDeNotas from "./components/ListaDeNotas/index";
import ListaDeCategorias from "./components/ListaDeCategorias/index";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      notas:[],
      categorias:[],
    };
  }

  adicionarCategoria(nome) {
    const novoArrayDeCategorias = [...this.state.categorias, nome];
    const novoEstado = {
      ...this.state, 
      categorias:novoArrayDeCategorias,
    }
    this.setState(novoEstado);
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayDeNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayDeNotas
    }
    this.setState(novoEstado);
  }

  deletarNota(indice) {
    let arrayDeNotas = this.state.notas;
    arrayDeNotas.splice(indice, 1);
    this.setState({
      notas:arrayDeNotas
    });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={ this.state.categorias }
          criarNota={ this.criarNota.bind(this) }
        />
        <main className="conteudo-principal">
            <ListaDeCategorias 
              categorias={ this.state.categorias }
              adicionarCategoria={ this.adicionarCategoria.bind(this) }  
            />
            <ListaDeNotas 
              apagarNota={ this.deletarNota.bind(this) } 
              notas={ this.state.notas }
            />
        </main>        
      </section>   
    );
  }
}

export default App;
