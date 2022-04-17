import React, {useState} from 'react';
import './style.css';

function Contador(props) {
    const [numero, setNumero] = useState(0);

    function incrementar(num) {
        setNumero(num + 1);
    }

    function decrementar(num) {
        setNumero(num - 1);
    }

    return (
        <div id="contador">
            <p>{numero}</p>

            <button className="btn-count" onClick={() => incrementar(numero)}>+</button>
            <button className="btn-count" onClick={() => decrementar(numero)}>-</button>
        </div>
    )
}

export default Contador;