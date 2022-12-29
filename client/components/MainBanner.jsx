import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const MainBanner = ({ banner }) => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      autoPlay
      infiniteLoop
      autoPlaySpeed={3000}
      showStatus={false}
    >
      {banner.map((item) => {
        return (
          <div className="hero-banner-container" key={item.id}>
            <img
              src={item.image}
              alt={item.description}
              className="hero-banner-image"
            ></img>
          </div>
        );
      })}
    </Carousel>
  );
};
