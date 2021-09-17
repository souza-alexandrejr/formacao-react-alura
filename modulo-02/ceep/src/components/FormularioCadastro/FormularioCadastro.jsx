import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "";
        this.state = {
            categorias:[],
        }
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    _novasCategorias(categorias) {
        this.setState({
            ...this.state,
            categorias,
        })
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }
    
    _handleMudancaDeTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaDeTexto(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _handleMudancaDeCategoria(evento) {
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    render() {
        return (
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                <select className="form-cadastro_input"
                    onChange={ this._handleMudancaDeCategoria.bind(this) }>
                    <option>Sem Categoria</option>
                    { this.state.categorias.map( (categoria, index) => {
                        return <option key={ index }>{ categoria }</option>
                    }) }
                </select>
                <input 
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaDeTitulo.bind(this)} 
                />
                <textarea 
                    rows={15}
                    placeholder="Escreva sua nota..." 
                    className="form-cadastro_input" 
                    onChange={this._handleMudancaDeTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;