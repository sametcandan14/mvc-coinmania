import { useEffect } from "react";
import MainPageView from "../views/MainPageView";
import axios from "axios";
axios.defaults.baseURL("https://api.coincap.io/v2/assets");

const MainPageController = () => {
  useEffect(() => {
    axios.get("/?limit=10&offset=1");
  }, []);
  return <MainPageView />;
};

export default MainPageController;
