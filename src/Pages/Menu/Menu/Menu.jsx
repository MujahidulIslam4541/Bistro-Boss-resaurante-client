import { Helmet } from "react-helmet-async";
import Cover from "../../../Shaird/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/sectionTitle/sectionTitle";
import MenuCategory from "../menuCategory/MenuCategory";
import CoverImage from "../../../assets/menu/banner3.jpg";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import soupImage from "../../../assets/menu/pizza-bg.jpg";

const Menu = () => {
  const [menus] = useMenu();
  const dessert = menus.filter((menu) => menu.category === "dessert");
  const salad = menus.filter((menu) => menu.category === "salad");
  const offered = menus.filter((menu) => menu.category === "offered");
  const pizza = menus.filter((menu) => menu.category === "pizza");
  const soup = menus.filter((menu) => menu.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss / Menu</title>
      </Helmet>

      {/* Pages cover */}
      <Cover
        img={CoverImage}
        heading="OUR MENU"
        description="Compellingly procrastinate enterprise-wide relationships rather than user-centric synergy. Assertively enable e-business infomediaries."
      ></Cover>

      {/* offered menu section */}
      <SectionTitle
        heading="TODAY 'S OFFER"
        subheading="---Don't miss---"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu section */}
      <Cover
        img={dessertImage}
        heading="DESSERTS"
        description="Compellingly procrastinate enterprise-wide relationships rather than user-centric synergy. Assertively enable e-business infomediaries."
      ></Cover>
      <MenuCategory items={dessert}></MenuCategory>

      {/* Pizza menu section */}
      <Cover
        img={pizzaImage}
        heading="PIZZA"
        description="Compellingly procrastinate enterprise-wide relationships rather than user-centric synergy. Assertively enable e-business infomediaries."
      ></Cover>
      <MenuCategory items={pizza}></MenuCategory>

      {/* Salad menu section */}
      <Cover
        img={saladImage}
        heading="SALADS"
        description="Compellingly procrastinate enterprise-wide relationships rather than user-centric synergy. Assertively enable e-business infomediaries."
      ></Cover>
      <MenuCategory items={salad}></MenuCategory>

      {/* soup menu section */}
      <Cover
        img={soupImage}
        heading="SOUPS"
        description="Compellingly procrastinate enterprise-wide relationships rather than user-centric synergy. Assertively enable e-business infomediaries."
      ></Cover>
      <MenuCategory items={soup}></MenuCategory>
    </div>
  );
};

export default Menu;
