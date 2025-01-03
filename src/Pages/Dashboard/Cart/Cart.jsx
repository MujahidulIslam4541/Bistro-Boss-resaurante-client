import React from "react";
import UseCarts from "../../../hooks/UseCarts";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const Cart = () => {
  const [cart,refetch] = UseCarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = UseAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount>0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch()
          }
        });
      }
    });
  };
  return (
    <div>
      {/* dashboard heading */}
      <div className="w-full md:w-1/3  mx-auto text-center my-8">
        <p className="text-[#D99904] font-semibold pb-2">----MY CART-----</p>
        <h2 className="text-3xl font-semibold border-y-4 py-4 border-gray-300">
          WANNA ADD TO CART
        </h2>
      </div>

      {/* dashboard table heading */}
      <div className="flex justify-evenly">
        <h2 className="text-2xl font-semibold">My cart:{cart.length} </h2>
        <h2 className="text-2xl font-semibold">Total Price:{totalPrice} </h2>
        <button className="btn btn-primary">Pay</button>
      </div>

      {/* table cart item show */}
      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead className="bg-orange-500 text-white ">
            <tr>
              <th>#</th>
              <th>IMAGE</th>
              <th className="text-center">NAME</th>
              <th className="text-center">PRICE</th>
              <th className="text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          className="text-center"
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{item.price}</td>
                <th className="text-center">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-2xl text-red-500"
                  >
                    <MdDeleteForever />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
