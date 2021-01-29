import React from "react";
import Style from '../Card/styles.module.css';
import className from 'classnames';

interface CardProps {
  imgSrc: any,
  text: String,
  customClass: String
}

const Card = ({ imgSrc, text, customClass }: CardProps) => {
const customClasses = className(Style.wrapper, customClass)
  return (
    <div className={customClasses}>
      <img className={Style.img} src={imgSrc} alt="CardImg"/>
      <span className={Style.text} >{text}</span>
    </div>
  );
};

export default Card;
