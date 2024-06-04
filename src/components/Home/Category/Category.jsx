import img1 from "../../../assets/product-cat-1.webp";
import img2 from "../../../assets/product-cat-3.webp";
import img3 from "../../../assets/product-cat-4.webp";
import img4 from "../../../assets/product-cat-5.webp";
const Category = () => {
  const category = [
    {
      img: img1,
      text: "Ipad phone & Tablets",
    },
    {
      img: img2,
      text: "Warless & Watches",
    },
    {
      img: img3,
      text: "Computer Monitor & Laptop",
    },
    {
      img: img4,
      text: "Exercize Bike & Saver Clean",
    },
  ];
  return (
    <div className="section-container">
      <div className="md:flex items-center justify-between py-5">
        {category.map((cat) => (
          <div key={cat.img} className="text-center">
            <img className="w-full" src={cat.img} alt="" />
            <p className="mt-3 text-sm font-semibold text-gray-500">
              {cat.text}
            </p>
          </div>
        ))}
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Category;
