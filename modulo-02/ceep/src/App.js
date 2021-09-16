import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/index";
import ListaDeNotas from "./components/ListaDeNotas/index";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      notas:[]
    };
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
    arrayDeNotas.splice(indice);
    this.setState({
      notas:arrayDeNotas
    });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas 
          apagarNota={this.deletarNota.bind(this)} 
          notas={this.state.notas}
        />
      </section>   
    );
  }
}

export default App;
