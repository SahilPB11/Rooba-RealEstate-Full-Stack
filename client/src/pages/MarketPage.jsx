import React, { useEffect } from "react";
import TopBar from "../components/marketCompo/TopBar";
import TertiaryNav from "../components/TeritaryNav";
import MainBoard from "../components/marketCompo/MainBoard";

const MarketPage = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <TopBar />
      <TertiaryNav />
      <MainBoard />
    </div>
  );
};

export default MarketPage;
