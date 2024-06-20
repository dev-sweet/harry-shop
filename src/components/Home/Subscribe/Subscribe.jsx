const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="section-container">
        <div className="py-16">
          <div className="p-12 bg-white flex items-center justify-between gap 3">
            <h1 className="text-4xl font-bold">
              Subscribe for <br />
              Latest Trends & Offers
            </h1>
            <div className="border border-black px-4 py-2 w-2/4">
              <input
                type="email"
                // value={email}
                // onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-4/5 border-0 outline-0"
              />
              <button
                // onClick={handleSubscribe}
                className="w-1/5 bg-black text-white px-5 py-3 hover:bg-[#f50963] transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
