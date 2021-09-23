import './App.css';
import { Fragment } from 'react';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';

function App() {
  return (
    <Fragment>
      <Home />
      <Sobre />
    </Fragment>
  );
}

export default App;
