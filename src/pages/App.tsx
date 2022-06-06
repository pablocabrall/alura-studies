import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Style  from './App.module.scss';

function App() {
  return (
    <div className={Style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
