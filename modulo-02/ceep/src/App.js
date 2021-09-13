import React from "react";

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título"/>
        <textarea placeholder="Escreva sua nota" />
        <button>Criar Nota</button>
      </form>
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
    </section>   
  );
}

export default App;
