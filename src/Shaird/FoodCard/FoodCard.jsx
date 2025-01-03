import Swal from "sweetalert2";
import USeAuth from "../../hooks/USeAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseCarts from "../../hooks/UseCarts";

const FoodCard = ({ item }) => {
  const { user } = USeAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const AxiosSecure=UseAxiosSecure()
  const [,refetch]=UseCarts()
  const { price, image, name, recipe, _id } = item || {};
  const handleAddToCard = (food) => {
    if (user && user?.email) {
      // ToDo:Data Post on card related api
      const cartItem = {
        cartId: _id,
        email: user.email,
        name,
        price,
        image,
      };
      AxiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            icon: "success",
            title: `${name} Added to your card`,
            showConfirmButton: false,
            timer: 1500
          });
          // use refetch and  data loaded don't refresh
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please Login and Add to Card?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login it!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    console.log(food);
  };
  return (
    <div>
      {/* single recommended card */}
      <div className="card px-4">
        <div>
          <img className="w-full" src={image} alt="" />
        </div>
        <p className="absolute bg-gray-900 text-white right-0 mr-8 mt-4 px-2 rounded ">
          ${price}
        </p>
        <div className="flex flex-col items-center space-y-2 mt-4">
          <h2 className="text-xl font-semibold text-center">{name}</h2>
          <p className="text-gray-600 ">{recipe}</p>
          <button
            onClick={() => handleAddToCard(item)}
            className="border-b-2 text-orange-500 btn btn-outline border-0 border-orange-600 rounded-md"
          >
            ADD TO CARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
