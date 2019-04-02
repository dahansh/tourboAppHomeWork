import React from "react";
import Image from "react-bootstrap/Image";
import "./CityBlock.css";

const CoverImage = props => {
  return (
    <div className="city-block-container">
      <div className="city-block-spacer"></div>
      <div className="city-block-text"
        style={{
          backgroundColor: "#33CC99"
        }}
      >
        <span className="cityblock-text-span">Paris</span>
      </div>
      <div className="city-block-image">
        <Image
          src={props.img}
          style={{
            objectFit: "cover"
          }}
        />
      </div>

    </div>
  );
};

export default CoverImage;
