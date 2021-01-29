import React from "react";
import Style from "../WatchCard/styles.module.css";

interface WatchCardProps {
  imgSrc: any,
  title?: String,
  subTitle?: String,
  className?: any
}

const WatchCard = ({ imgSrc, title, subTitle, className }: WatchCardProps) => {
  return (
    <div className={className}>
      <img src={imgSrc} className={Style.cardImg} />
    </div>
  );
};

export default WatchCard;
