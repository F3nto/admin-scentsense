import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Line,
} from "recharts";
import "./Single.scss";

const Single = ({ data }) => {
  const { img, info, chart, activities } = data;

  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src={img} alt="" />
            <h1>{info.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(info).map(([key, value]) => (
              <div className="item" key={key}>
                <div className="itemTitle">{key} :</div>
                <div className="itemValue">{value}</div>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                labelStyle={{ display: "none" }}
                cursor={{ fill: "none" }}
              />
              <Legend />

              {chart.dataKeys.map((dataKey) => (
                <Line
                  key={dataKey.name}
                  type="monotone"
                  dataKey={dataKey.name}
                  stroke={dataKey.color}
                  activeDot={{ r: 8 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="activities">
        <h2>Lasted Activities</h2>
        <ul>
          {activities.map((activity) => (
            <li key={activity.text}>
              <div>
                <p>{activity.text}</p>
                <time>{activity.time}</time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Single;