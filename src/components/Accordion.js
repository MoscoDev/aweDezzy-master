import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default function Accordion() {
  return (
    <div className="accordion" style={{width: "60vw", margin:"0px auto", border: "none !important", boxShadow: "15px 10px 40px rgb(64 25 109 / 7%)"}}>
      <Collapse accordion expandIconPosition="right">
        <Panel className="title" header="Is Kuda a registered bank?" key="1">
          <p>
            Yes, we are licensed by the Central Bank of Nigeria. Our
            registration number is RC 796975.
          </p>
        </Panel>
        <Panel className="title" header="What makes Kuda different from other banks?" key="2">
          <p>
            We don’t have branches (because you don’t need branches). Kuda runs
            entirely on your phone (with an internet connection) and we’ll
            deliver your debit card to any address in Nigeria. <br />
            Because we don’t have branches, we save a lot of money. That’s how
            we can afford to pay you more interest than most banks and charge so
            little.
          </p>
        </Panel>
        <Panel className="title" header="What fees do you charge?" key="3">
          <p>
            We’ll give you 25 free transfers every month if you sign up with
            your Bank Verification Number (BVN).
            <br />
            Without your BVN, you’ll get 2 free transfers every month.
            <br />
            Extra transfers will cost you 10 naira each.
            <br />
            Everything else is free - using your account, using your Kuda Card
            and withdrawing cash from our partner ATMs.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
}
