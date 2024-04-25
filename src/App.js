import { useState } from 'react';
import {Banner} from './components/banner';
import { Forms } from './components/forms';
import { Time } from './components/time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
  },
  {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
  },
  {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
  },
  {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
  },
  {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
  },
  {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
  }
  
]

  const aoAdicionarNovoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Banner/>
      <Forms nomesDosTimes={times.map(time => time.nome)} aoCadastrarColaborador={colaborador => aoAdicionarNovoColaborador(colaborador)}/>

      {times.map(time => <Time 
       key={time.nome} 
       nome={time.nome} 
       corPrimaria={time.corPrimaria} 
       corSecundaria={time.corSecundaria} 
       colaboradores={colaboradores}
      />)}
    </div>
  );
}

export default App;
