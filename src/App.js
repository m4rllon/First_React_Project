import { useState } from 'react';
import {Banner} from './components/banner';
import { Forms } from './components/forms';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoAdicionarNovoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Banner/>
        <Forms aoCadastrarColaborador={colaborador => aoAdicionarNovoColaborador(colaborador)}/>
      </header>
    </div>
  );
}

export default App;
