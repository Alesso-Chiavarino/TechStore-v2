import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css'

const CartWidget = () => {
    return (
        <FontAwesomeIcon className='iconoCarrito' icon={faCartShopping} />
    )
}

export default CartWidget;