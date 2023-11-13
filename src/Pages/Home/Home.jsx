import { Helmet } from "react-helmet-async";
import Intro from "../Shared/Intro";
import Banner from "./Banner";
import Category from "./Category";
import Contact from "./Contact";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Recommend from "./Recommend";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <Intro />
            <PopularMenu />
            <Contact />
            <Recommend />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;