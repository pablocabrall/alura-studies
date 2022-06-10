import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';

class Formulario extends React.Component {

    state = {
        tarefa: "",
        tempo:  "00:00"
    }


    adicionarTarefa(){
    
    }


    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)} >
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione novo estudo</label>
                    <input type="text" 
                    value= {this.state.tarefa}
                    onChange={evento=> this.setState({...this.state, tarefa: evento.target.value})}
                    name="tarefa"
                    id="tarefa"
                    placeholder=""
                    required
                    />
                </div>
                <div  className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time"
                    value= {this.state.tempo}
                    onChange={ evento => this.setState({...this.state, tempo: evento.target.value})}
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                </div>
                <Botao type="subimit">
                    Adicionar
                </Botao>
            </form>
        )
    }
}

export default Formulario;