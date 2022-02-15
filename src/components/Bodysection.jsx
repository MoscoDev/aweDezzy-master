import { Button } from "antd";
import React from "react";
import "../css/Bodysection.css"

const Bodysection = ({ img, title, article, direction, cta }) => {
  return (
    <div className="body-section">
      {direction === "right" ? (
        <div className="container moses">
          <div className="left-body-section">
            <h1>{title}</h1>
            <p>{article}</p>
            <Button className="navButtons">{cta}</Button>
          </div>
          <div className="right-body-section">
            <img src={img} alt={title} width={"100%"}/>
          </div>
        </div>
      ) : (
        <div className="container" style={{background: "#FBFBFB"}}>
          <div className="right-body-section">
            <img src={img} alt={title} width={"100%"}/>
          </div>
          <div className="left-body-section">
            <h1>{title}</h1>
            <p>{article}</p>
            <Button className="navButtons">{cta}</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bodysection;
