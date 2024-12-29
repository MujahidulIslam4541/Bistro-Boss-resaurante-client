import { Helmet } from "react-helmet-async";
import Cover from "../../../Shaird/Cover/Cover";
import CoverImage from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss / Menu</title>
      </Helmet>

      <Cover
        img={CoverImage}
        heading="OUR MENU"
        description="Compellingly procrastinate enterprise-wide relationships rather than user-centric synergy. Assertively enable e-business infomediaries."
      ></Cover>
    </div>
  );
};

export default Menu;
