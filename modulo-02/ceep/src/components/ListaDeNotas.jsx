import React, { Component } from "react";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                <li>
                    <section>
                    <header>
                        <h3>Título #1</h3>
                    </header>
                    <p>Nota #1</p>
                    </section>
                </li>
                <li>
                    <section>
                    <header>
                        <h3>Título #2</h3>
                    </header>
                    <p>Nota #2</p>
                    </section>
                </li>
                <li>
                    <section>
                    <header>
                        <h3>Título #3</h3>
                    </header>
                    <p>Nota #3</p>
                    </section>
                </li>
            </ul> 
        );
    }
}

export default ListaDeNotas;