import './ProductsSlider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "../Item/Item";
import { useState, useEffect } from 'react';
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig';

const ProductsSlider = ({ beg, fin }) => {

    const responsive = {

        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1199 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1199, min: 768 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 768, min: 450 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 450, min: 0 },
            items: 1,
            slidesToSlide: 1,
        }
    };

    const [prodsShow, setProdsShow] = useState([])

    useEffect(() => {

        const prodsCollection = collection(db, 'products')
        const ref = query(prodsCollection, where('order', '>=', beg), where('order', '<=', fin))
        getDocs(ref)
            .then(res => {
                const products = res.docs.map(prod => {
                    return {
                        id: prod.id, ...prod.data()
                    }
                })
                setProdsShow(products)
            })
            .catch(eror => console.log(eror))
    }, [beg, fin])

    return (
        <div className="container">
            <Carousel
                className="cardShow"
                swipeable={true}
                draggable={true}
                showDots={false}
                additionalTransfrom={0}
                pauseOnHover
                rewind={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {prodsShow.map((prod) => <Item key={prod.id} {...prod} />)}
            </Carousel>
        </div>
    )
}

export default ProductsSlider