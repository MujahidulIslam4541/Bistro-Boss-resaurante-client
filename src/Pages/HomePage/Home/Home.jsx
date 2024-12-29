import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import Recommended from "../chipRecommended/Recommended";
import ContactUs from "../CotactUs/ContactUs";
import Featured from "../Fetured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss / Home</title>
      </Helmet>

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
