import SectionTitle from "../../Components/sectionTitle/sectionTitle";
import image1 from "../../assets/menu/dessert-bg.jpeg";
import image2 from "../../assets/menu/pizza-bg.jpg";
import image3 from "../../assets/menu/salad-bg.jpg";

const Recommended = () => {
  return (
    <section className="my-20">
      <SectionTitle
        subheading="---Should Try---"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>

      {/* All Recommend section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* single recommended card */}
        <div>
          <div>
            <img className="h-60" src={image1} alt="" />
          </div>

          <div className="flex flex-col items-center text-center space-y-2 mt-4">
            <h2 className="text-xl font-semibold">Dessert</h2>
            <p className="text-gray-600">
              Continually brand efficient web services after distributed growth
              strategies. Synergistically.
            </p>
            <button className="border-b-2 text-orange-500 btn btn-outline border-0 border-orange-600 rounded-md">
              ADD TO CARD
            </button>
          </div>
        </div>
        {/* single recommended card */}
        <div>
          <div>
            <img className="h-60" src={image2} alt="" />
          </div>

          <div className="flex flex-col items-center text-center space-y-2 mt-4">
            <h2 className="text-xl font-semibold">Pizza</h2>
            <p className="text-gray-600">
              Continually brand efficient web services after distributed growth
              strategies. Synergistically.
            </p>
            <button className="border-b-2 text-orange-500 btn btn-outline border-0 border-orange-600 rounded-md">
              ADD TO CARD
            </button>
          </div>
        </div>
        {/* single recommended card */}
        <div>
          <div>
            <img className="h-60" src={image3} alt="" />
          </div>

          <div className="flex flex-col items-center text-center space-y-2 mt-4">
            <h2 className="text-xl font-semibold"> Salad</h2>
            <p className="text-gray-600">
              Continually brand efficient web services after distributed growth
              strategies. Synergistically.
            </p>
            <button className="border-b-2 text-orange-500 btn btn-outline border-0 border-orange-600 rounded-md">
              ADD TO CARD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommended;
