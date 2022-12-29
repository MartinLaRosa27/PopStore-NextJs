import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer-container">
      <p>PopStore&copy; - 2022</p>
      <p>Martín Gabriel La Rosa</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillTwitterCircle />
        <AiFillFacebook />
      </p>
    </div>
  );
};
