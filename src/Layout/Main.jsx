import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shaird/Footer";
import Navbar from "../Shaird/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noNavbarFooter = location.pathname.includes("login");
  return (
    <div>
      {noNavbarFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noNavbarFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
