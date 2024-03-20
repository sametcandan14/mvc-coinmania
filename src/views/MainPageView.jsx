import millify from "millify";
import Loading from "./Loading";
import LoadMoreController from "../controllers/LoadMoreController";

const MainPageView = ({ coins }) => {
  return (
    <div className="container mt-5">
      {coins.length === 0 && <Loading />}

      {coins.length > 0 && (
        <table className="table table-dark table-striped table-hover ">
          <thead>
            <tr>
              <th>#</th>
              <th>coin</th>
              <th>fiyat</th>
              <th>market hacmi</th>
              <th>değişim(24s)</th>
              <th>% değişim(24s)</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin, i) => (
              <tr key={i}>
                <td>{i + 1} </td>
                <td>
                  <span>{coin.symbol} </span> <span>{coin.name} </span>{" "}
                </td>
                <td>{millify(coin.priceUsd)} </td>
                <td>{millify(coin.marketCapUsd)} </td>
                <td>{millify(coin.volumeUsd24Hr)} </td>
                <td>% {millify(coin.changePercent24Hr)} </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <LoadMoreController />
    </div>
  );
};

export default MainPageView;
