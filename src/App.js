import { useState } from 'react';
import Banner from './components/Banner/index.js';
import Formulario from './components/Formulario/index.js';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario cadastroColaborador={colaborador => novoColaborador(colaborador)}/>
    </div>
  );
}

export default App;
