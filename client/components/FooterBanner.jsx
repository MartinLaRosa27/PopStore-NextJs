import React from "react";

export const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="footer-banner-container">
      <img
        src={`${footerBanner.image}`}
        className="footer-banner-image"
        title={footerBanner.description}
      ></img>
    </div>
  );
};
