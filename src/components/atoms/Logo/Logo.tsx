import React from 'react';
import logo from '../../../assets/images/Logo.png';
import Style from '../Logo/styles.module.css';

const Logo = () => {
    return (
        <div>
            <img src={logo} alt="logo" className={Style.logoStyle} />
        </div>
    );
};

export default Logo;