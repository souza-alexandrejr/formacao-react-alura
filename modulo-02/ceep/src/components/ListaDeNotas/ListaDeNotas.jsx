import React, { Component } from "react";
import CardNota from "../CardNota";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                { this.props.notas.map((nota, index) => { 
                    return (
                        <li className="lista-notas_item" key={ index }>
                            <CardNota 
                                categoria={ nota.categoria }
                                titulo={ nota.titulo } 
                                texto={ nota.texto }
                                apagarNota={ this.props.apagarNota }
                                indice={ index }
                            />
                        </li>
                    );
                }) }                
            </ul> 
        );
    }
}

export default ListaDeNotas;