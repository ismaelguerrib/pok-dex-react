import React from "react";

const Types = ({ types }) => {
  if (types) {
    const typesJSX = types.map((type, i) => {
      return <div key={i}>{type.type.name} </div>;
    });
    return <div>{typesJSX} </div>;
  }
  return "";
};
export default Types;
