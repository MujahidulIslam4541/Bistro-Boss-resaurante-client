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
      <Cover img={CoverImage} heading="OUR MENU"></Cover>

      {/* offered menu section */}
      <SectionTitle
        heading="TODAY 'S OFFER"
        subheading="---Don't miss---"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu section */}

      <MenuCategory
        coverImage={dessertImage}
        heading="dessert"
        items={dessert}
      ></MenuCategory>

      {/* Pizza menu section */}

      <MenuCategory
        coverImage={pizzaImage}
        heading="pizza"
        items={pizza}
      ></MenuCategory>

      {/* Salad menu section */}

      <MenuCategory
        coverImage={saladImage}
        heading="salad"
        items={salad}
      ></MenuCategory>

      {/* soup menu section */}

      <MenuCategory
        coverImage={soupImage}
        heading="soup"
        items={soup}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
