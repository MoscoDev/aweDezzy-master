import React from "react";
import Cards from "./Cards";
import {
  CalendarOutlined,
  CameraTwoTone,
  ChromeFilled,
  ChromeOutlined,
  DownCircleTwoTone,
} from "@ant-design/icons/lib/icons";
import "../css/CardSection.css";

function CardSection() {
  return (
    <div className="Card_section">
      <Cards
        icon={
          <ChromeFilled
            style={{
              color: "#40196D",
              fontSize: "19px",
              padding: "5px",
              borderRadius: "50%",
              backgroundColor: "#DFE3FF",
            }}
          />
        }
        text="Create smart budgets to help you take control of your spending."
      />
      <Cards
        icon={
          <ChromeOutlined
            style={{
              color: "#40196D",
              fontSize: "19px",
              padding: "5px",
              borderRadius: "50%",
              backgroundColor: "#DFE3FF",
            }}
          />
        }
        text="See where your money goes without solving equations."
        style={{
          color: "#40196D",
          fontSize: "19px",
          padding: "5px",
          borderRadius: "50%",
          backgroundColor: "#DFE3FF",
        }}
      />
      <Cards
        icon={
          <DownCircleTwoTone
            twoToneColor="#40196D"
            style={{
              color: "#40196D",
              fontSize: "19px",
              padding: "5px",
              borderRadius: "50%",
              backgroundColor: "#DFE3FF",
            }}
          />
        }
        text="Pay absolutely nothing for sending money."
      />
      <Cards
        icon={
          <CalendarOutlined
            style={{
              color: "#40196D",
              fontSize: "19px",
              padding: "5px",
              borderRadius: "50%",
              backgroundColor: "#DFE3FF",
            }}
          />
        }
        text="Well give you a free debit card. Order it right in the app."
      />
      <Cards
        icon={
          <CameraTwoTone twoToneColor="#40196D"
            style={{
              color: "#40196D",
              fontSize: "19px",
              padding: "5px",
              borderRadius: "50%",
              backgroundColor: "#DFE3FF",
            }}
          />
        }
        text="Save automatically and we’ll pay you up to 15% interest every year."
      />
    </div>
  );
}

export default CardSection;
