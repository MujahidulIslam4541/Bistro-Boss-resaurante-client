import image from "../../../assets/home/chef-service.jpg";
const BistroBoss = () => {
  return (
    <div
      className="h-96 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-white bg-opacity-80 p-10 rounded shadow-lg text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 font-CinzelFont">BISTRO BOSS</h2>
        <p className="text-gray-700">
          Collaboratively conceptualize market positioning intellectual capital
          rather than excellent quality vectors. Intrinsicly productivate
          out-of-the-box paradigms whereas compelling methodologies. Rapidiously
          architect clicks-and-mortar experiences with high-quality total
          linkage. Appropriately develop integrated ideas for corporate supply
          chains. Professionally unleash 2.0 supply chains and interdependent
          leadership skills. Seamlessly generate enterprise meta-services.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
