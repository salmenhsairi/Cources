import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Wigets() {
  const newArticle = (heading, subTitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>
      {newArticle("Salmen HS is back", "Top News 2021 - 9895 readers")}
      {newArticle("Yassin HS is here", "Top News 2021 - 4154 readers")}
      {newArticle("Nesrine HS had a vaccine for covid19", "Top News 2021 - 4155 readers")}
      {newArticle("Papa HS is there", "Top News 2021 - 121 readers")}
    </div>
  );
}

export default Wigets;
