import bannerImg from "../../../assets/slider-1.webp";
const Banner = () => {
  return (
    <div className="gb-gray-200 min-h-screen">
      <div className="section-container md:flex">
        <div className="w-3/5">
          <div className="h-full flex items-center justify-start">
            <div>
              <p className="font-semibold  text-gray-500">Best Ear</p>
              <p className="font-semibold text-gray-500">Headphone</p>
              <h3 className="text-7xl mt-3 font-bold">
                Find Best <br /> Matley Sound.
              </h3>
            </div>
          </div>
        </div>
        <div className="w-2/4 h-screen flex flex-col items-end justify-end ">
          <img className="full" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
