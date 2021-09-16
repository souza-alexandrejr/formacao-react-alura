import React, { Component } from 'react';
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";

class CardNota extends Component {
    apagarNota() {
        const indice = this.props.indice;
        this.props.apagarNota(indice);
    }

    render() { 
        return (
            <section className="card-nota">
                <h4>{ this.props.categoria }</h4>
                <header className="card-nota_cabecalho">                    
                    <h3 className="card-nota_titulo">{ this.props.titulo }</h3>
                    <DeleteSVG onClick={ this.apagarNota.bind(this) } />
                </header>
                <p className="card-nota_texto">{ this.props.texto }</p>
            </section>
        );
    }
}
 
export default CardNota;