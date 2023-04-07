import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";


const Homepage = () => {
    return (
        <>
            <section>
                <Announcement />
                <Navbar/>
                <Slider/>
                <Categories/>
            </section>
        </>
    )
}

export default Homepage