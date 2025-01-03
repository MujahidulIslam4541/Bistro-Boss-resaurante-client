import React from "react";
import { FaAd, FaCalendar, FaHome, FaVoicemail } from "react-icons/fa";
import {
  FaBookBookmark,
  FaCartShopping,
  FaMarsAndVenus,
  FaShop,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex gap-8 ">
        {/* user dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-300 font-CinzelFont text-black">
        <div className="text-center py-4">
          <h2 className="text-xl font-semibold ">BISTRO BOSS</h2>
          <p className="text-xl">RESTAURANT</p>
        </div>
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome />
              USER HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar />
              RESERVATION
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartShopping />
              MY CART
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd />
              ADD A REVIEW{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaBookBookmark />
              BOOKING{" "}
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaMarsAndVenus />
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShop></FaShop>
              SHOPE
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaVoicemail></FaVoicemail>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>


      {/* user dashboard outlet */}
      <div className="flex-1 w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
