import React, { Component } from "react";
import CardNota from "../CardNota";

class ListaDeNotas extends Component {
    constructor() {
        super();
        this.state = {
            notas:[],
        }
    }

    _novasNotas(notas) {
        this.setState({
            ...this.state,
            notas,
        })
    }

    componentDidMount() {
        this.props.notas.inscrever(this._novasNotas.bind(this));
    }

    render() {
        return (
            <ul className="lista-notas">
                { this.state.notas.map((nota, index) => { 
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