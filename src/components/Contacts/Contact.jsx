import contact1 from "../../assets/contact-icon-1.webp";
import contact2 from "../../assets/contact-icon-3.webp";
import contact3 from "../../assets/contact-icon-2.webp";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Your form submitted successfully");
  };
  return (
    <div className="mt-20">
      <div className="contact-banner-bg  py-20">
        <h3 className="text-lg text-center">GET TO KNOW US</h3>
        <h1 className="text-center text-6xl font-bold">
          Have a project in mind? <br /> Let’s talk.
        </h1>
        <div className="mt-20 section-container grid grid-cols-3 gap-10">
          <div className="bg-white p-16 shadow-md text-center">
            <img className="mx-auto" src={contact1} alt="" />
            <h4 className="text-gray-400 font-bold underline mt-5">Contact</h4>
            <br />
            <Link
              to="mailto:location@website.com"
              className="mt-3 font-semibold text-xl hover:text-[#f50963]"
            >
              location@website.com
            </Link>
            <br />
            <Link
              to="tel:624 423 26 72"
              className="mt-3 text-xl font-semibold hover:text-[#f50963]"
            >
              +624 423 26 72
            </Link>
          </div>
          <div className="bg-white p-10 shadow-md text-center">
            <img className="mx-auto" src={contact2} alt="" />
            <h4 className="text-gray-400 font-bold underline mt-5">Location</h4>

            <br />
            <Link
              to="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255307,-74.0019219,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2598c3502110b:0xe2e96eb949c6fcc!8m2!3d40.7255307!4d-74.0019219!16s%2Fg%2F11sdnws42z?entry=ttu"
              className="mt-3 text-xl font-semibold hover:text-[#f50963]"
            >
              88 New South Head Rd, Triple, New York
            </Link>
          </div>
          <div className="bg-white p-10 shadow-md text-center">
            <img className="mx-auto" src={contact3} alt="" />
            <h4 className="text-gray-400 font-bold underline mt-5">
              Social Media
            </h4>
            <br />
            <p className="font-semibold text-xl">Follow on social media</p>
            <div className="flex items-center justify-center mt-5 gap-3">
              <Link className="hover:text-[#f50963]" to="/">
                <FaFacebookF />
              </Link>
              <Link className="hover:text-[#f50963]" to="/">
                <FaTwitter />
              </Link>
              <Link className="hover:text-[#f50963]" to="/">
                <FaLinkedin />
              </Link>
              <Link className="hover:text-[#f50963]" to="/">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="mx-auto p-16 bg-white shadow-sm border rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Send a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-5">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="daizy-input w-full p-4 border rounded-md focus:outline-none focus:border-[#f50963]"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="daizy-input w-full p-4 border rounded-md focus:outline-none focus:border-[#f50963]"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="daizy-input w-full p-4 border rounded-md focus:outline-none focus:border-[#f50963]"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="daizy-input w-full p-4 border rounded-md focus:outline-none focus:border-[#f50963]"
                  placeholder="Enter your company name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="daizy-input mt-5 w-full p-4 border rounded-md focus:outline-none focus:border-[#f50963]"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="ml-2">I agree to the Privacy Policy</span>
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 bg-[#f50963] hover:bg-[#ca004d] text-white font-semibold py-4 px-12 rounded-md focus:outline-none"
            >
              Send Message
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
