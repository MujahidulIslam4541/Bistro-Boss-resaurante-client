import { Parallax } from "react-parallax";
const Cover = ({ img, heading }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[500px] object-cover"
      >
        <div className="hero-overlay  bg-opacity-20"></div>
        <div className="hero-content bg-gray-800 bg-opacity-60 w-2/3 py-10 text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">{heading}</h1>
            <p className="mb-5">Holisticly recaptiualize effective e-tailers for value-added platforms. Energistically engineer performance based experiences.</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
