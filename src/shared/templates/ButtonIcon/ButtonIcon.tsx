import React from "react";
import "./styles.scss";

const ButtonIcon = ({
  image,
  altText,
  onClick,
}: {
  image: string;
  altText: string;
  onClick?: () => void;
}) => (
  <button className="button-icon" onClick={onClick}>
    <img src={`./../../../../assets/${image}`} alt={altText} />
  </button>
);

export default ButtonIcon;
