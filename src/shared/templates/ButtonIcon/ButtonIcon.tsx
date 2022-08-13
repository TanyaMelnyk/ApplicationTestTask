import React from "react";
import "./styles.scss";

const ButtonIcon = ({ image, altText }: { image: string; altText: string }) => (
  <button className="button-icon">
    <img src={`./../../../../assets/${image}`} alt={altText} />
  </button>
);

export default ButtonIcon;
