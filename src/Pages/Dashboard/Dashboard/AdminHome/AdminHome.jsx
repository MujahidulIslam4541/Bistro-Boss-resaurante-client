import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../Components/sectionTitle/sectionTitle";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { FaBook, FaCar, FaDollarSign, FaShapes, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading="admin Home"
        subheading="---Hi Welcome Back---"
      ></SectionTitle>

      <div className="stats shadow gap-4">
        <div className="stat bg-pink-300">
          <div className="stat-figure text-secondary">
           <FaDollarSign className="text-3xl"></FaDollarSign>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{stats?.revenue}</div>
        </div>

        <div className="stat bg-orange-300">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title"> Users</div>
          <div className="stat-value">{stats?.users}</div>
        </div>

        <div className="stat bg-pink-300">
          <div className="stat-figure text-secondary">
         <FaShapes className="text-3xl"></FaShapes>
          </div>
          <div className="stat-title">MenuItems</div>
          <div className="stat-value">{stats?.menuitems}</div>
        </div>
        <div className="stat bg-orange-300">
          <div className="stat-figure text-secondary">
          <FaCar className="text-3xl"></FaCar>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
