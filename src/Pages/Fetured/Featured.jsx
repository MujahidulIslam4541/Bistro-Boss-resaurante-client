import React from "react";
import SectionTitle from "../../Components/sectionTitle/sectionTitle";
import featuredImg from ".././../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-bg h-[600px] my-24">
      <div className="bg-gray-900 bg-opacity-50 ">
        {/* section title */}
        <SectionTitle
          heading="FROM OUR MENU"
          subheading="---Check it out---"
        ></SectionTitle>

        {/* Menu section */}
        <div className="md:flex justify-center text-white items-center px-20 py-[84px] gap-4 ">
          <div>
            <img className="md:w-[1000px]" src={featuredImg} alt="" />
          </div>
          <div className="md:left-10">
            <p className="text-xl font-semibold">January 2025</p>
            <h2 className="uppercase text-2xl font-semibold">Where Can I Get Some</h2>
            <p className="text-gray-300">
              Monotonectally brand web-enabled customer service for B2B growth
              strategies. Proactively exploit web-enabled communities vis-a-vis
              real-time customer service. Proactively unleash B2C e-services
              vis-a-vis.
            </p>
            <button className="border-b-2 mt-5 border-slate-400 rounded-md text-xl font-semibold text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
