import logo from "../../assets/logo-black.de19b08e.svg";
const Footer = () => {
  return (
    <footer className="footer px-[80px] py-20 w-full bg-base-200 text-base-content">
      <nav className="">
        <div>
          <img src={logo} alt="" />
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
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control md:w-80 w-60">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn  join-item bg-[#f50963]  text-gray-100 hover:bg-[#ca004d] hover:text-gray-50">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
