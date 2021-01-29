import React from 'react';
import Data from '../../../data.json';
import Card from '../../atoms/Card/Card';
import Img from '../../../assets/images/img1.jpg';
import Style from '../Category/styles.module.css';
import className from 'classnames';

const Category = () => {
    const customClass = className(Style.cardPadding)
    return (
        <div className={Style.categoryDisplay}>
            {Data.category.map(ele => (
                <Card
                imgSrc={Img}
                text={ele.text}
                customClass={customClass}
                />
            ))}
        </div>
    );
};

export default Category;
