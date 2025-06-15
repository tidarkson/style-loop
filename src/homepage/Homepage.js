import Slider from "./components/Slider"
import Categories from "./components/Categories";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";

const Homepage = () => {
    return (
        <>
            <section>
                <Slider/>
                <Categories/>
                <Products/>
                <Newsletter/>
            </section>
        </>
    )
}

export default Homepage