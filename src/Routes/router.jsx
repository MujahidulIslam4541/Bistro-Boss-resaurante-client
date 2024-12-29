
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";


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
          path:'order',
          element:<Order></Order>
        }
      ]
    },
  ]);;

export default router;