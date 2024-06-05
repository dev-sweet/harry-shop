import img from "../../../assets/bannerimg.jpg";

const Iphone = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-xl font-bold">Apple iPhone 12 Pro</h1>
          <h1 className="text-5xl font-bold">
            The wait is on: iphone 12 max pro
          </h1>
          <p className="py-6">Last call for up to 32% off!</p>
          <button className="btn bg-gray-100">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Iphone;
