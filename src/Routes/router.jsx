
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <h2 className="text-2xl font-bold text-red-400 ">Page Not Found </h2>,
      children:[
        {

            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);;

export default router;