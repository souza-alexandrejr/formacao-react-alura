import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
    render() { 
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li className="lista-categorias_item">Categoria 1</li>
                    <li className="lista-categorias_item">Categoria 2</li>
                    <li className="lista-categorias_item">Categoria 3</li>
                </ul>
                <input 
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria" 
                />
            </section>
        );
    }
}
 
export default ListaDeCategorias;