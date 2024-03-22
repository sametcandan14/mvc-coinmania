import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import axios from "axios";

import { InfoLabel } from "../model/DetailModel";

const DetailController = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    axios.get(`/${id}`).then((res) => setCoin(res.data.data));
  }, []);

  const model = new InfoLabel(coin);

  return <DetailView model={model} />;
};

export default DetailController;
