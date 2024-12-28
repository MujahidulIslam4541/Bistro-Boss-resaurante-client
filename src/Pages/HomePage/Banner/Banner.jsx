import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slider1 from "../../../assets/home/01.jpg";
import slider2 from "../../../assets/home/02.jpg";
import slider3 from "../../../assets/home/03.png";
import slider4 from "../../../assets/home/04.jpg";
import slider5 from "../../../assets/home/05.png";
import slider6 from "../../../assets/home/06.png";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <div className="h-[600px] overflow-hidden">
          <img src={slider1} className="h-full"/>
        </div>
        <div className="h-[600px]">
          <img src={slider2} className="h-full"/>
        </div>
        <div className="h-[600px]">
          <img src={slider3}  className="h-full"/>
        </div>
        <div className="h-[600px]">
          <img src={slider4} className="h-full"/>
        </div>
        <div className="h-[600px]">
          <img src={slider5} className="h-full"/>
        </div>
        <div className="h-[600px]">
          <img src={slider6} className="h-full"/>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
