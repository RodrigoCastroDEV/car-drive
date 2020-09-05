import React from 'react';
import './styles/semaforo.scss';

const Farol = ({color, active}) => {
    // se active for igual a true => -active
    // se active for igual a false => 
    const isActive = active ? `-active`: ``
    // semaforo__farol-red (farol vermelho apagado)
    // semaforo__farol-red-active (farol vermelho aceso)
    return (
        <div className={`semaforo__farol-${color}${isActive}`}>
        
        </div>
    )
}

export default Farol;