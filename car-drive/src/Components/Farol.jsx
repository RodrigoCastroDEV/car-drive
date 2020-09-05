import React from 'react';
import './styles/semaforo.scss';

const Farol = ({color, teste}) => {
    console.log(teste)
    return (
        <div className={`semaforo__farol-${color}`}>
        
        </div>
    )
}

export default Farol;