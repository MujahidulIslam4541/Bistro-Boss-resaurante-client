import { Outlet } from "react-router-dom";
import Footer from "../Shaird/Footer";
import Navbar from "../Shaird/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;