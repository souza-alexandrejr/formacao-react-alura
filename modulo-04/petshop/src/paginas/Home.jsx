import React from "react";
import ListaPost from "../componentes/ListaPost";

function Home() {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaPost url={'/posts'} />
    </main>
  );
}

export default Home;
