import './App.css';
import { Fragment } from 'react';
import './assets/css/base/base.css'
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';

function App() {
  const Router = () => {
    const location = window.location.pathname;
    if (location === "/sobre") {
      return <Sobre />
    } else {
      return <Home />
    }
  }

  return (
    <Fragment>
      { Router() }
    </Fragment>
  );
}

export default App;
