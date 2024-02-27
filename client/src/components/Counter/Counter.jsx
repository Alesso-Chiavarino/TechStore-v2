import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Counter.css'

const Counter = () => {

    const { cart, cartItemCounter } = useContext(CartContext);

    const counterValue = cartItemCounter();

    return (
        <>
            {cartItemCounter > 0 ? <span className="counter counterHide" > {counterValue} </span> : <span className="counter" > {counterValue} </span>}
        </>
    )
}
export default Counter;