import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
function SwiperComp() {
  return (
    <Swiper>
      {data.map((card, i) => {
        <SwiperSlide key={i}>
          <div className="r-card">
            <img src={card.image} alt="" srcset="" />
            <span className="secondaryText r-price">
              <span>$</span>
              <span>{card.price}</span>
            </span>
          </div>
        </SwiperSlide>;
      })}
    </Swiper>
  );
}

export default SwiperComp;
