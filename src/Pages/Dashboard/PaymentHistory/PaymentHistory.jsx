import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/sectionTitle/sectionTitle";
import USeAuth from "../../../hooks/USeAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const PaymentHistory = () => {
  const { user } = USeAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        heading="your payment history"
        subheading="---At a Glance---"
      ></SectionTitle>

      <h2 className="text-3xl font-bold">Payment History :{payments.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.email}</td>
                <td>${item.price}</td>
                <td>{item.transactionId}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
