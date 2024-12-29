const FoodCard = ({ item }) => {
  const { price, image, name, recipe } = item || {};
  return (
    <div>
        {/* single recommended card */}
        <div className="card px-4">
          <div>
            <img className="w-full" src={image} alt="" />
          </div>
            <p className="absolute bg-gray-900 text-white right-0 mr-8 mt-4 px-2 rounded ">${price}</p>
          <div className="flex flex-col items-center space-y-2 mt-4">
            <h2 className="text-xl font-semibold text-center">{name}</h2>
            <p className="text-gray-600 ">{recipe}</p>
            <button className="border-b-2 text-orange-500 btn btn-outline border-0 border-orange-600 rounded-md">
              ADD TO CARD
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default FoodCard;
