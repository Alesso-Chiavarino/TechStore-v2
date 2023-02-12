import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ products }) => {

    return (
        <ul className="contCard container">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    )
}
export default ItemList