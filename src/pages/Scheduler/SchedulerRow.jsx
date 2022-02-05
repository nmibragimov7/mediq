import React from 'react';
import styles from "./indes.module.css"

const SchedulerRow = ({children, classes}) => {
    return (
        <div className={`${styles.row} p-2 d-flex justify-content-between align-items-center ${classes}`}>
            {children}
        </div>
    );
};

export default SchedulerRow;
