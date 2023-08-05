import './ProductsSlider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "../Item/Item";
import { useProductsSlider } from './useProductsSlider';

const ProductsSlider = ({ beg, fin }) => {

    const responsive = {

        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1199 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1199, min: 992 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 992, min: 450 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 450, min: 0 },
            items: 2,
            slidesToSlide: 1,
        }
    };

    const { prodsShow } = useProductsSlider(beg, fin)

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