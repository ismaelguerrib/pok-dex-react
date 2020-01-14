import React from "react";

const Stats = ({ stats }) => {
  if (stats) {
    const statsJSX = stats.map((stat, i) => {
      console.log(stat);
      return (
        <span key={i}>
          {" "}
          {stat.stat.name} : {stat.base_stat} ,
        </span>
      );
    });
    return <p>Stats : {statsJSX} </p>;
  }
  return "";
};
export default Stats;
