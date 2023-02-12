import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    const collectionProd = collection(db, 'products')
    const ref = doc(collectionProd, itemId)
    getDoc(ref)
      .then(res => {
        const filteredProduct = {
          id: res.id, ...res.data()
        }
        setProduct(filteredProduct)
      })
      .catch(eror => console.log(eror))
      .finally(() => setLoading(false))
  }, [itemId])

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