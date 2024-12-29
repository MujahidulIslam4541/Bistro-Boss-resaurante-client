import Featured from "../../Fetured/Featured";
import PopularMenu from "../../PopularMenu/PopularMenu";
import Testimonial from "../../Testimonial/Testimonial";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;