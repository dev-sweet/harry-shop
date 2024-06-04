import bannerImg from "../../../assets/slider-1.webp";
// import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="gb-gray-200 min-h-screen mt-20 md:mt-0">
      <div className="section-container flex flex-col-reverse md:flex-row ">
        <div className="md:w-3/5">
          <div className="md:h-full flex items-center justify-start">
            <div className="text-center md:text-left">
              <p className="font-semibold  text-gray-500">Best Ear</p>
              <p className="font-semibold text-gray-500">Headphone</p>
              <h3 className="md:text-7xl text-4xl mt-3 font-bold">
                Find Best <br /> Matley Sound.
              </h3>
              <button className="mt-5 btn px-16 py-0 btn-neutral btn-outline">
                Shop Now
                {/* <FaLongArrowAltRight /> */}
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-2/4 md:h-screen flex flex-col items-end justify-end ">
          <img className="full" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
