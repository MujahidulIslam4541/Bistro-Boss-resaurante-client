import SectionTitle from "../../../Components/sectionTitle/sectionTitle";
import MenuItem from "../../../Shaird/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menus] = useMenu();
  const popularMenu = menus.filter((menu) => menu.category === "popular");

  return (
    <section className="mb-10">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subheading={"---Check it out---"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 ">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <button className="border-0 border-b-2 rounded-md border-orange-500 text-orange-500 btn btn-outline">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
