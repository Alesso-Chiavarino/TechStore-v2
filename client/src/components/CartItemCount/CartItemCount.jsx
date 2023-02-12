import { useContext } from 'react'
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc'
import { CartContext } from '../../context/CartContext'

const CartItemCount = ({ prod }) => {

    const { subtractQuantity, addQuantity } = useContext(CartContext);

    return (
        <>
            <div className="contIC">
                <div className='leftSideCounterIC'>
                    <span className="counterIC" >{prod.quantity}</span>
                </div>
                <div className='rightSideCounterIC'>
                    <button className="btnIC" disabled={prod.quantity === prod.stock} > <VscTriangleUp className='arrowIC' onClick={() => addQuantity(prod.id)} /> </button>
                    <button className="btnIC" disabled={prod.quantity === 1} > <VscTriangleDown className='arrowIC' onClick={() => subtractQuantity(prod.id)} /> </button>
                </div>
            </div>
        </>
    )
}

export default CartItemCount