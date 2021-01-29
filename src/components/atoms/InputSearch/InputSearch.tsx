import React from 'react';
import SearchIcon from '../../../assets/images/search.svg';
import Style from '../InputSearch/styles.module.css';
import Data from '../../../data.json';

interface InputProps {
    placeHolder: String
}

const InputSearch = ({ placeHolder }: InputProps) => {
    return (
        <div className={Style.search}>
            <input type="text" className={Style.searchInput} placeholder={`${placeHolder}`} />
            <img src={SearchIcon} alt="searchIcon" className={Style.searchIcon} />
        </div>
    );
};

export default InputSearch;
