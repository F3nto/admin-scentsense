import React from "react";
import "./Home.scss";
import TopBox from "../../Components/TopBox/TopBox";

import ProductChartBox from "../../Components/ProductChartBox/ProductChartBox";
import UserChartBox from "../../Components/UserChartBox/UserChartBox";
import ConverChartBox from "../../Components/ConverChartBox/ConverChartBox"
import RevChartBox from "../../Components/RevChartBox/RevChartBox";

import BarChartBox from "../../Components/BarChartBox/BarChartBox";
import PieChartBox from "../../Components/PieChartBox/PieChartBox";
import BigChartBox from "../../Components/BigChartBox/BigChartBox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxConversion,
  chartBoxRevenue,
  barChartBoxVisit,
  barChartBoxRevenue,
} from "../../data";

const Home = () => {
  return (
    <div className="home">
      <div className="box box-1">
        <TopBox />
      </div>
      <div className="box box-2">
        <UserChartBox data={chartBoxUser} />
      </div>
      <div className="box box-3">
        <ProductChartBox />
      </div>
      <div className="box box-4">
        <PieChartBox />
      </div>
      <div className="box box-5">
        <ConverChartBox data={chartBoxConversion} />
      </div>
      <div className="box box-6">
        <RevChartBox data={chartBoxRevenue} />
      </div>
      <div className="box box-7">
        <BigChartBox />
      </div>
      <div className="box box-8">
        <BarChartBox data={barChartBoxVisit} />
      </div>
      <div className="box box-9">
        <BarChartBox data={barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
