import { Helmet } from "react-helmet-async";
import Cover from "../../../Shaird/Cover/Cover";
import OrderCoverImage from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  // initialIndex ways tab open
  const categories = ["dessert", "salad", "pizza", "soup", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  // All data loading
  const [menus] = useMenu();
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
      <Cover img={OrderCoverImage} heading="OUR SHOPE"></Cover>

      <div className="mt-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>DESSERTS</Tab>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUP</Tab>
            <Tab>DRINKS</Tab>
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
    </div>
  );
};

export default Order;
