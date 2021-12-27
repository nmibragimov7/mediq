import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import styles from "./style.module.scss"

const BaseDatePicker = ({date, width = 100, ...props}) => {
    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <div
            style={{width: width + "%"}}
        >
            <input className={styles.datepicker__input} value={value} onClick={onClick} ref={ref} placeholder="дд/мм/гггг" readOnly/>
        </div>
    ));

    return (
        <>
            <DatePicker
                customInput={<CustomInput/>}
                selected={date}
                calendarClassName={styles.datepicker__calendar}
                dayClassName={() => {
                    return styles.datepicker__day
                }}
                {...props}
                />
        </>
    )
}

export default BaseDatePicker
