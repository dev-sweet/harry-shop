import { Link } from "react-router-dom";
import logo from "../../assets/logo-black.de19b08e.svg";
import payment from "../../assets/footer-payment.webp";
const Footer = () => {
  return (
    <>
      <footer className="footer px-[80px] py-20 w-full bg-base-100 text-base-content">
        <nav className="">
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <p className="mt-3">
              The home and elements needed to <br /> create beautiful products.
            </p>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contacts</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Store Locations</a>
          <a className="link link-hover">Reviews</a>
        </nav>
        <nav>
          <h6 className="footer-title">Shop</h6>
          <a className="link link-hover">Game & Video</a>
          <a className="link link-hover">Phone &Tablets</a>
          <a className="link link-hover">Computers & Laptop</a>
          <a className="link link-hover">Sport Watches</a>
          <a className="link link-hover">Discounts </a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">Reviews</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Shipping</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <div>
          <h6 className="footer-title">Talk To Us</h6>
          <p>
            Find a location nearest you. See
            <br />
            <Link className="text-[#f50963]  hover:text-[#ca004d]" to="#">
              Our Stores
            </Link>
          </p>
          <Link
            to="tel:624 423 26 72"
            className="mt-3 text-xl font-semibold hover:text-[#f50963]"
          >
            +624 423 26 72
          </Link>
          <Link
            className="font-semibold hover:text-[#f50963]"
            to="mailto:support@harry.com"
          >
            support@harry.com
          </Link>
        </div>
      </footer>
      <div className="section-container">
        <div className="divider"></div>
        <div className="flex justify-between pb-5">
          <p>
            Copyright © 2024{" "}
            <Link
              className="font-semibold text-[#f50963] hover:text-[#ca004d]"
              to="#"
            >
              {" "}
              Sweet
            </Link>{" "}
            All rights reserved.
          </p>
          <img src={payment} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
