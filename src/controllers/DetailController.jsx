import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import axios from "axios";
import { SiCoinmarketcap } from "react-icons/si";
import { RiStockFill } from "react-icons/ri";
import { FaPercent } from "react-icons/fa";
import { MdPriceChange, MdEventAvailable } from "react-icons/md";

const DetailController = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    axios.get(`/${id}`).then((res) => setCoin(res.data.data));
  }, []);

  const infoFields = [
    {
      icon: <SiCoinmarketcap />,
      label: "Market Hacmi",
      value: coin?.marketCapUsd,
    },
    {
      icon: <MdEventAvailable />,
      label: "Supply",
      value: coin?.supply,
    },
    {
      icon: <MdPriceChange />,
      label: "Fiyat",
      value: coin?.priceUsd,
    },
    {
      icon: <FaPercent />,
      label: "24 Saatlik Değişim %",
      value: coin?.changePercent24Hr,
    },
    {
      icon: <RiStockFill />,
      label: "24 Saatlik İşlem Hacmi",
      value: coin?.volumeUsd24Hr,
    },
  ];
  return <DetailView coin={coin} infoFields={infoFields} />;
};

export default DetailController;
