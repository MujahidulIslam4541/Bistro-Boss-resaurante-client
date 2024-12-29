import BistroBoss from "../../BistroBoss/BistroBoss";
import Recommended from "../../chipRecommended/Recommended";
import ContactUs from "../../CotactUs/ContactUs";
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
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <ContactUs></ContactUs>
            <Recommended></Recommended>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;