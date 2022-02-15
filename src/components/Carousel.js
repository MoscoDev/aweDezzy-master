import { Carousel } from 'antd';
import React from 'react'

const contentStyle = {
    margin: "auto",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

export default function Slider() {
    return (
        <div>
            <Carousel autoplay style={{ width: "90%", margin: "auto" }}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
    )
}
