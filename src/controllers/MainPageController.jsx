import { useEffect, useState } from "react";
import MainPageView from "../views/MainPageView";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [params, setParams] = useSearchParams();

  axios.defaults.baseURL = "https://api.coincap.io/v2/assets";
  useEffect(() => {
    const page = params.get("page");

    if (!page) {
      setParams({ page: "1" });
      return;
    }

    axios
      .get(`/?limit=15&offset=${page}`)
      .then((res) => setCoins(res.data.data));
  }, [params]);
  return <MainPageView coins={coins} />;
};

export default MainPageController;
