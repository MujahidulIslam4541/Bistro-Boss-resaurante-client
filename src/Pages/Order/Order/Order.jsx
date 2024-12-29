import { Helmet } from "react-helmet-async";
import Cover from "../../../Shaird/Cover/Cover";
import OrderCoverImage from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Shaird/FoodCard/FoodCard";
import { driver } from "localforage";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menus] = useMenu();
  const {category}=useParams()
  console.log(category);
  const dessert = menus.filter((menu) => menu.category === "dessert");
  const salad = menus.filter((menu) => menu.category === "salad");
  const drinks = menus.filter((menu) => menu.category === "drinks");
  const pizza = menus.filter((menu) => menu.category === "pizza");
  const soup = menus.filter((menu) => menu.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss /order</title>
      </Helmet>
      <Cover
        img={OrderCoverImage}
        heading="OUR SHOPE"
      ></Cover>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>DESSERTS</Tab>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUP</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
