import React from "react";
import "./styles.css";
import wieVisionImg from "./assets/wie-vision.jpg";
import wieMissionImg from "./assets/wie-mission.jpg";
import anotherImg from "./assets/another-card.jpg";

const WIEComponent = () => {
  return (
    <div className="wrapper">
      <div className="cols">
        <div
          className="col"
          onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}
        >
          <div className="container">
            <div
              className="front"
              style={{
                backgroundImage: `url(${wieVisionImg})`,
              }}
            >
              <div className="inner"></div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  <span className="backt"> Inspire:</span> "Empowering women to
                  reach new heights."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}
        >
          <div className="container">
            <div
              className="front"
              style={{
                backgroundImage: `url(${wieMissionImg})`,
              }}
            >
              <div className="inner"></div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  <span className="backt">Empower: </span>"Unlocking potential
                  through support and unity."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}
        >
          <div className="container">
            <div
              className="front"
              style={{
                backgroundImage: `url(${anotherImg})`,
              }}
            >
              <div className="inner"></div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  <span className="backt">Achieve: </span>"Celebrating
                  milestones in women's achievements."{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WIEComponent;
