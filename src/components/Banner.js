import { Button, Col, Row, Space } from "antd";
import React from "react";
import "../css/Banner.css";
import logo from "../images/logo.svg";
import fintech from "../images/euromoner.svg";
import bbc from "../images/bbc.svg";
import phone from "../images/Background.svg";

export default function Banner() {
  return (
    <div className="Banner">
      <Row style={{ maxHeight: "100vh", margin: "10% 3%" }}>
        <Col span={10} className="banner-left">
          <h1 className="bold">{"We’re the bank for the awe and ease"}</h1>
          <p className="card-main">
            <span>
              Were here to help you get the best out of your money, no strings
              attached. <br />
              <div className="logo-containers">
                <Space>
                  <img
                    src={bbc}
                    width={"60px"}
                    style={{ margin: "20px" }}
                    alt="ll"
                  />
                  <img  width={"60px"} src={fintech} alt="bbc" />
                </Space>
                <br />
              </div>
              <span className="little">Welcome to your freedom!</span>
            </span>
          </p>
          <Space size={"middle"}>
            <Button className="navButtons matas" size="large" shape="round">
              <a href="/#">Get aweDeazy</a>
            </Button>
            <Button
              className="navButtons"
              size="large"
              shape="round"
              style={{ padding: "0px 30px" }}
            >
              <a href="/#cardsection">Know more</a>
            </Button>
          </Space>
        </Col>
        <Col
          lg={12}
          xl={13}
          md={0}
          sm={0}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-80px",
          }}
          className="banner-right"
        >
          <div className="wrap">
            <div>
              <img
                rel="preconnect"
                src={phone}
                alt="phone"
                width={300}
                className="banner-right-image"
              />
            </div>
            <div className="object-reverse" style={{ animationDelay: "0s" }}>
              <img
                alt=""
                className="object_img"
                src={logo}
                style={{ animationDelay: "-7.5s" }}
              />
            </div>

            <div className="object-fast" style={{ animationDelay: "-7.5s" }}>
              <img
                alt=""
                className="object_img"
                src={logo}
                style={{ animationDelay: "-30s" }}
              />
            </div>

            <div className="object-fast" style={{ animationDelay: "-4s" }}>
              <img
                alt=""
                className="object_img"
                src={logo}
                style={{ animationDelay: "-2s" }}
              />
            </div>
            <div className="object" style={{ animationDelay: "0s" }}>
              <img
                alt=""
                className="object_img"
                src={logo}
                style={{ animationDelay: "-10s" }}
              />
            </div>
            <div className="object" style={{ animationDelay: "-5s" }}>
              <img
                alt=""
                className="object_img"
                src={logo}
                style={{ animationDelay: "0s" }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
