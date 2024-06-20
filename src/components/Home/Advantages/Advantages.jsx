import { FaTruck } from "react-icons/fa";
import { ImCoinDollar } from "react-icons/im";
import { MdPayment, MdSupportAgent } from "react-icons/md";
const Advantages = () => {
  const data = [
    {
      title: "Free Shipping",
      desc: "Free Shipping for orders over $120",
      icon: <FaTruck />,
    },
    {
      title: "Refund",
      desc: "Within 30 days for anexchange",
      icon: <ImCoinDollar />,
    },
    {
      title: "Support",
      desc: "24 hours a day, 7 daysa week",
      icon: <MdSupportAgent />,
    },
    {
      title: "Payment",
      desc: "Pay with Multiple CreditCards",
      icon: <MdPayment />,
    },
  ];
  return (
    <div className="section-container">
      <div className="grid grid-cols-4 gap-5 py-16">
        {data.map((item) => (
          <div
            key={item.title}
            className="col flex gap-3 items-center justify-between"
          >
            <div className="rounded-full border border-1 border-gray-300 p-3 text-2xl">
              {item.icon}
            </div>
            <div>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-600 text-md mt-2 pr-4">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
