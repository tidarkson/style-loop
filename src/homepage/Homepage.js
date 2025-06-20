import Slider from "./components/Slider"
import Categories from "./components/Categories";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const Homepage = () => {
    return (
        <>
            <section>
                <Slider/>
                <Categories/>
                <Products/>
                <Newsletter/>
                <Footer/>
            </section>
        </>
    )
}

export default Homepage