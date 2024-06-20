import Advantages from "../Advantages/Advantages";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Iphone from "../Iphone/Iphone";
import Products from "../Products/Products";
import Subscribe from "../Subscribe/Subscribe";
const Home = () => {
  return (
    <div className="">
      <Banner />
      <Category />
      <Products />
      <Iphone />
      <Advantages />
      <Subscribe />
    </div>
  );
};

export default Home;
