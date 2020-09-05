import React, {useState} from 'react';
import './styles/semaforo.scss';
import Farol from './Farol'

const Semaforo = () => {
    const [active,setActive] = useState('red')
    const mudaFarol = ()=>{
        switch(active) {
            case 'red':
                setActive('green')
                break;
            case 'orange':
                setActive('red')
                break;
            case 'green':
                setActive('orange')
                break;
        }
    }
    setInterval(mudaFarol, 4000)
   
    return (
        <div className="semaforo-container">
        <Farol color="red" active={active === 'red'}/>
        <Farol color="orange" active={active === 'orange'}/>
        <Farol color="green" active={active === 'green'}/>
        </div>
    )
}

export default Semaforo;