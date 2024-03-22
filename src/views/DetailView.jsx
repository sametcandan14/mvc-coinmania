const DetailView = ({ model }) => {
  return (
    <div className="container ">
      <div className=" row gx-2 gy-2">
        {model.infoFields.map((info, i) => (
          <div className="col-6 col-lg-4">
            <div
              className="bg-white text-black rounded text-center p-2 shadow-lg"
              key={i}
            >
              <span className="fs-4">{info.icon}</span>
              <h3 className="my-3">{info.label}</h3>
              <p>{info.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailView;
