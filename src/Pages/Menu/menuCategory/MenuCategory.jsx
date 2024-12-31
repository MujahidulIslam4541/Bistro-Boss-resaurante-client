import { Link } from "react-router-dom";
import MenuItem from "../../../Shaird/menuItem/MenuItem";
import Cover from "../../../Shaird/Cover/Cover";

const MenuCategory = ({ items, heading,  coverImage }) => {
  return (
    <div className="my-16">
      {heading && (
        <Cover
          img={coverImage}
          heading={heading}
        ></Cover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 mt-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Link to={`/order/${heading}`}>
          <button className="border-0 border-b-2 rounded-md border-orange-500 text-orange-500 btn btn-outline">
            ORDER YOUR FAVORITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
