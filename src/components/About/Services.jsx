import { CiPlay1 } from "react-icons/ci";
const Services = () => {
  const data = [
    {
      title: "Can I cancel my account at any time?",
      desc: `Non similique culpa in provident quos sit commodi beatae ea
                laborum suscipit id autem velit aut iusto odio et deleniti quis
                et doloremque enim vel consequuntur quos.`,
    },
    {
      title: "What happens after the license expires?",
      desc: `Non similique culpa in provident quos sit commodi beatae ea
       laborum suscipit id autem velit aut iusto odio et deleniti quis
        et doloremque enim vel consequuntur quos.`,
    },
    {
      title: "Does Harry have any documentations?",
      desc: `Non similique culpa in provident quos sit commodi beatae ea
                laborum suscipit id autem velit aut iusto odio et deleniti quis
                et doloremque enim vel consequuntur quos.`,
    },
  ];
  return (
    <div className="">
      <div className="py-24 flex gap-5 items-center content-between">
        <div className="services-bg w-2/5 flex items-center justify-center h-[500px]">
          <button className="btn btn-lg py-12 rounded-full bg-white text-[#f50963] text-5xl flex items-center content-center shadow-lg hover:bg-[#f50963] hover:text-white">
            <CiPlay1 />
          </button>
        </div>
        <div className="w-3/5 px-20 text-[#03041c]">
          <h3 className="text-lg font-semibold">
            Get in touch with us to see how
          </h3>
          <h2 className="text-5xl font-semibold mt-3">
            Provide smart and flexible digital services
          </h2>
          <div className="divider"></div>
          {data.map((item) => (
            <div key={item.title} className="collapse collapse-plus">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-xl text-[#f50963] font-medium m-0">
                {item.title}
              </div>
              <div className="collapse-content">
                <p>{item.desc}</p>
              </div>
              <div className="divider"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
