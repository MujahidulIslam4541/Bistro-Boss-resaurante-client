import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import image1 from "../../../assets/home/slide1.jpg";
import image2 from "../../../assets/home/slide2.jpg";
import image3 from "../../../assets/home/slide3.jpg";
import image4 from "../../../assets/home/slide4.jpg";
import image5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/sectionTitle/sectionTitle";

const Category = () => {
  return (
    <section className="my-20">

    <SectionTitle  heading={"ORDER ONLINE"} subheading={"---From 11:00am to 10:00pm---"}>

    </SectionTitle>




        {/* Added swiper in category */}
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-20 mt-8"
      >
        <SwiperSlide>
          <img src={image1} alt="" />
          <p className="text-3xl font-semibold text-white shadow-md -mt-16 text-center ">
            SALADS
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
          <p className="text-3xl font-semibold text-white shadow-md -mt-16 text-center ">
            SOUPS
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
          <p className="text-3xl font-semibold text-white shadow-md -mt-16 text-center ">
            PIZZA
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
          <p className="text-3xl font-semibold text-white shadow-md -mt-16 text-center uppercase">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />
          <p className="text-3xl font-semibold text-white shadow-md -mt-16 text-center ">
            SALADS
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
          <p className="text-3xl font-semibold text-white shadow-md -mt-16 text-center ">
            SOUPS
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
          <p className="text-3xl font-semibold text-white shadow-md -mt-16 text-center ">
            PIZZA
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
          <p className="text-3xl font-semibold text-white shadow-md -mt-12 text-center uppercase">
            desserts
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
