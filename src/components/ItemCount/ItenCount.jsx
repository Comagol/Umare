import './ItemCount.css';
import { useState } from 'react';


const ItemCount = ({initial, stock}) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (initial < count){
            setCount(count - 1)
        }else{
            alert("La cantidad no puede ser menor a " + initial)
        }
        
    }

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            alert ("Has alcanzado el limite del producto seleccionado")
        }
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button>Agregar al carrito</button>
        </div>
    )
} 

export default ItemCount