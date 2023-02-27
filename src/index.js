import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2019, 1, 1, 22).getHours();
// console.log(date);

const custumStyle = {
  msg: "good morning",
  color: "red"
};

if (date > 12 && date <= 18) {
  custumStyle.msg = "good afternoon";
  custumStyle.color = "green";
}
if (date > 18) {
  custumStyle.msg = "good evening";
  custumStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="head" style={custumStyle}>
    {custumStyle.msg}
  </h1>,
  document.getElementById("root")
);
