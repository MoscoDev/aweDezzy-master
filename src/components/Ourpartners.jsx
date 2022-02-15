import React from "react";
import tc from "../images/tc.svg";
import wef from "../images/wef.svg";
import fintech from "../images/gtbank.svg";
import bbc from "../images/bbc.svg";
import cnbc from "../images/cnbc.svg";
import visa from "../images/visa.svg";
import euromoner from "../images/zenith.svg";

const Ourpartners = () => {
  return (
    <div className="ourpartners">
      <h1>Our Partners</h1>
      <br />
      <br />
      <div className="ourpartners-img">
        <marquee behavior="sliding">
          <img style={{ margin: "0px 40px" }} src={tc} alt={tc} />
          <img src={wef} alt="" style={{ margin: "0px 40px" }} />
          <img src={fintech} alt={fintech} style={{ margin: "0px 40px" }} />
          <img src={bbc} alt={bbc} style={{ margin: "0px 40px" }} />
          <img src={cnbc} alt="cnbc" style={{ margin: "0px 40px" }} />
          <img src={euromoner} alt="zenith" style={{ margin: "10px 40px" }} />
          <img src={visa} alt="visa" style={{ margin: "0px 40px 0px" }} />
        </marquee>
      </div>
    </div>
  );
};

export default Ourpartners;
