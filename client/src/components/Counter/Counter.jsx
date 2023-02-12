import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Counter.css'

const Counter = ({ value }) => {

    const { cart } = useContext(CartContext);

    return (
        <>
            {cart.length === 0 ? <span className="counter counterHide" > {value} </span> : <span className="counter" > {value} </span>}
        </>
    )
}
export default Counter;