import React from 'react';
import styles from '../Hamberger/styles.module.css';

const Hamberger = () => {
    return (
        <div>
            <div className={styles.hamberger_menu}></div>
            <div className={styles.hamberger_menu}></div>
            <div className={styles.hamberger_menu}></div>
        </div>
    );
};

export default Hamberger;
