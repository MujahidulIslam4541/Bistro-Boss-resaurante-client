import MenuItem from "../../../Shaird/menuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <button className="border-0 border-b-2 rounded-md border-orange-500 text-orange-500 btn btn-outline">
          ORDER YOUR FAVORITE FOOD
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
