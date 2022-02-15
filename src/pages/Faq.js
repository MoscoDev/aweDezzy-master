import React from "react";
import Accordion from "../components/Accordion";
import "../css/Faq.css";

export default function Faq() {
  return (
    <div className="Faq">
      <div className="header">
        <h1 className="transparent-text">Frequently Asked Questions</h1>
      </div>
      <Accordion />
    </div>
  );
}
