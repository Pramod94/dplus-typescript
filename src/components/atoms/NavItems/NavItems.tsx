import React from 'react';
import Data from '../../../data.json';
import Style from '../NavItems/styles.module.css';

const NavItems = () => {
    const { items } = Data.navBar;
    return (
        <div className={Style.navItems}>
            {items.length && items.map(ele => (
                <span className={Style.navItem}>{ele}</span>
            ))}
        </div>
    );
}

export default NavItems;
