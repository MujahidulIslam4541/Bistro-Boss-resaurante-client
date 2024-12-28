import Featured from "../../Fetured/Featured";
import PopularMenu from "../../PopularMenu/PopularMenu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;