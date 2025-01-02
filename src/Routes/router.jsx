
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivetRouter from "./PrivetRouter";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <h2 className="text-2xl font-bold text-red-400 ">Page Not Found </h2>,
      children:[
        {

            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
          path:'/dashboard',
          element:<PrivetRouter><Dashboard></Dashboard></PrivetRouter>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);;

export default router;