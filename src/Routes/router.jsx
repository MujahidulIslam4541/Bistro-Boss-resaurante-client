
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";


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
        }
      ]
    },
  ]);;

export default router;