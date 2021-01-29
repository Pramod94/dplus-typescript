import React from "react";
import Data from "../../../data.json";
import WatchCard from "../../atoms/WatchCard/WatchCard";
import CardImg from "../../../assets/images/shows.png";
import Style from "../WatchList/style.module.css";

const WatchList = () => {
  const { watchList } = Data;
  return (
    <div className={Style.watchWrapper}>
      {watchList.length &&
        watchList.map((ele) => (
          <div className={Style.wrapper}>
            <h3 className={Style.title}>{ele.title}</h3>
            <div className={Style.cards}>
              {ele.shows.map((shows) => (
                <WatchCard imgSrc={CardImg} className={Style.eachCard} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default WatchList;
