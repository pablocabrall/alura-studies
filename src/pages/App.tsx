import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Style  from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { Itarefa } from '../types/tarefa';

function App() {
   
  //  utilizamos o hook useState
   const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);

  return (
    <div className={Style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro/>
    </div>
  );
}

export default App;
