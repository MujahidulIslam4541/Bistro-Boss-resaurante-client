import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import USeAuth from "./USeAuth";

const UseCarts = () => {
  const axiosSecure = UseAxiosSecure();
  const {user}=USeAuth()
//   Use Tanstack Query
  const {refetch, data: cart = [] } = useQuery({
    queryKey: ["cart",user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart,refetch];
};

export default UseCarts;
