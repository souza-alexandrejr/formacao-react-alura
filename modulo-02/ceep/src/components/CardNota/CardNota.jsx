import React, { Component } from 'react';
import "./estilo.css";

class CardNota extends Component {
    render() { 
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">Título #1</h3>
                </header>
                <p className="card-nota_texto">Nota #1</p>
            </section>
        );
    }
}
 
export default CardNota;