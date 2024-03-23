import millify from "millify";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const DetailView = ({ model }) => {
  console.log(model.chartData);
  return (
    <div className="container ">
      <div className=" row gx-2 gy-2">
        {model?.infoFields.map((info, i) => (
          <div key={i} className="col-6 col-lg-4">
            <div
              className="bg-white text-black rounded text-center p-2 shadow-lg"
              key={i}
            >
              <span className="fs-4">{info.icon}</span>
              <h3 className="my-3">{info.label}</h3>
              <p>{!isNaN(info?.value) ? millify(info?.value) : info?.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-5 w-100">
        <Line data={model?.chartData} />
      </div>
    </div>
  );
};

export default DetailView;
