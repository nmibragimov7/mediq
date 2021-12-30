import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import styles from "./style.module.scss"

// Переиспользуемый UI компонент для дейтпикера
const BaseDatePicker = ({date, width = 100, ...props}) => {
    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ]
    const weeks = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <div
            style={{width: width + "%"}}
        >
            <input className={styles.datepicker__input} value={value} onClick={onClick} ref={ref} placeholder="дд/мм/гггг" readOnly/>
        </div>
    ))
    const getMonth = (date) => {
        const index = new Date(date).getMonth()
        return months[index]
    }
    const getYear = (year) => {
        return new Date(year).getFullYear()
    }

    return (
        <>
            <DatePicker
                customInput={<CustomInput/>}
                selected={date}
                calendarClassName={styles.datepicker__calendar}
                dayClassName={() => {
                    return styles.datepicker__day
                }}
                dateFormat="dd/MM/yyyy"
                formatWeekDay={() => null}
                renderCustomHeader={({date,
                                         decreaseMonth,
                                         increaseMonth,
                                         prevMonthButtonDisabled,
                                         nextMonthButtonDisabled,
                                     }) => {
                    return (
                        <div>
                            <div className={`${styles.datepicker__header} d-flex justify-content-between align-items-center`}>
                                <div className={styles.datepicker__prev} onClick={decreaseMonth} disabled={prevMonthButtonDisabled}></div>
                                <p>{getMonth(date)} {getYear(date)}</p>
                                <div className={styles.datepicker__next} onClick={increaseMonth} disabled={nextMonthButtonDisabled}></div>
                            </div>
                            <div className={`${styles.datepicker__weeks} d-flex justify-content-between align-items-center`}>
                                {
                                    weeks.map(week => {
                                        return (
                                            <div key={week}>{week}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }}
                {...props}
                />
        </>
    )
}

export default BaseDatePicker

