import Slider from "../Slider/Slider";
import SloganProducts from "../SloganProducts/SloganProducts";
import ProductsSlider from "../ProductsSlider/ProductsSlider";

const Home = () => {

    return (
        <>
            <Slider />
            <SloganProducts title={"TECHSTORE / PRODUCTOS DESTACADOS"} porcent={33} />
            <ProductsSlider beg={1} fin={10} />
            <SloganProducts title={"TECHSTORE / ULTIMAS NOVEDADES"} porcent={66} />
            <ProductsSlider beg={11} fin={20} />
            <SloganProducts title={"TECHSTORE / LAS MEJORES TIENDAS"} porcent={100} />
            <ProductsSlider beg={21} fin={30} />
        </>
    )
}
export default Home;






