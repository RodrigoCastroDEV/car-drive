import React from 'react';
import './styles/semaforo.scss';
import Farol from './Farol'

const Semaforo = () => {
    return (
        <div className="semaforo-container">
        <Farol color="red" teste="breja"/>
        <Farol color="orange"/>
        <Farol color="green"/>
        </div>
    )
}

export default Semaforo;