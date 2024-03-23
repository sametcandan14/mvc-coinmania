import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import axios from "axios";

import { InfoLabel } from "../model/DetailModel";

const DetailController = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState(null);

  useEffect(() => {
    axios.get(`/${id}`).then((res) => setCoin(res.data.data));
  }, []);

  useEffect(() => {
    axios
      .get(`/${id}/history?interval=d1`)
      .then((res) => setHistory(res.data.data));
  }, []);

  console.log(history);
  const model = new InfoLabel(coin, history);

  return <DetailView model={model} />;
};

export default DetailController;
