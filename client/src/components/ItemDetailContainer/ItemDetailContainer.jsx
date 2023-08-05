import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import Loader from "../Loader/Loader";
import { useItemDetailContainer } from "./useItemDetailContainer";

const ItemDetailContainer = () => {

  const { loading, product } = useItemDetailContainer()

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="container-fluid details">
      <div className="contItemDetail">
        <ItemDetail product={product} />
      </div>
    </section>
  )
}

export default ItemDetailContainer;