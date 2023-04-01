import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";


const Homepage = () => {
    return (
        <>
            <section>
                <Announcement />
                <Navbar/>
                <Slider/>
            </section>
        </>
    )
}

export default Homepage