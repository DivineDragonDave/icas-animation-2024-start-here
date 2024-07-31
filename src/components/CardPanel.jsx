import React, { useState, useEffect } from "react";
import "./CardPanel.css";

const ELEMENTS = [
  { name: "0" },
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
];

const CardPanel = () => {
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    if (minimized) {
      ELEMENTS.forEach((element, index) => {
        setTimeout(() => {
          document
            .querySelector(`.card-${element.name}`)
            .classList.add("moving-down");
        }, index * 100);
      });
    } else {
      ELEMENTS.forEach((element) => {
        document
          .querySelector(`.card-${element.name}`)
          .classList.remove("moving-down");
      });
    }
  }, [minimized]);

  const handleClick = () => {
    setMinimized(!minimized);
  };

  const returnElement = (isSmall) => {
    return ELEMENTS.map((element) => {
      return (
        <div
          className={
            isSmall
              ? "small-elements__card"
              : `large-elements__card card-${element.name}`
          }
          key={element.name}
        >
          {element.name}
        </div>
      );
    });
  };

  return (
    <div className="card-panel" onClick={handleClick}>
      <div className="large-elements">{returnElement(false)}</div>
    </div>
  );
};

export default CardPanel;
