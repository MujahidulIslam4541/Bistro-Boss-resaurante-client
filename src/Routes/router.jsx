import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signUp/SignUp";

import PrivetRouter from "./PrivetRouter";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Allusers from "../Pages/Dashboard/Dashboard/Allusers/Allusers";
import AddItem from "../Pages/Dashboard/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute/AdminRoute";
import ManegItem from "../Pages/Dashboard/ManegItem/ManegItem";
import UpdateItem from "../Pages/Dashboard/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Dashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: (
      <h2 className="text-2xl font-bold text-red-400 ">Page Not Found </h2>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: (
          <PrivetRouter>
            <Order></Order>
          </PrivetRouter>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRouter>
        <Dashboard></Dashboard>
      </PrivetRouter>
    ),
    children: [
      // User Routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      // Admin Routes
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            {" "}
            <UpdateItem></UpdateItem>{" "}
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "manageItem",
        element: (
          <AdminRoute>
            <ManegItem></ManegItem>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <Allusers></Allusers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
