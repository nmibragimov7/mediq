import React from 'react';
import styles from "./index.module.css"

const SchedulerRow = ({children, classes}) => {
    return (
        <div className={`${styles.row} d-flex justify-content-between align-items-center ${classes}`}>
            {children}
        </div>
    );
};

export default SchedulerRow;
