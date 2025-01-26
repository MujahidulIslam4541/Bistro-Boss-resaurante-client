// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const useMenu = () => {
  const axiosSecure = UseAxiosSecure();
  // const [menus, setMenus] = useState([]);
  // const [loading,setLoading]=useState(true)
  // useEffect(() => {
  //   fetch("https://bistro-boss-server-theta-ashy.vercel.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenus(data);
  //       setLoading(false)
  //     });
  // }, []);

  const {
    data: menus = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/menu");
      return res.data;
    },
  });

  return [menus, loading,refetch];
};

export default useMenu;
