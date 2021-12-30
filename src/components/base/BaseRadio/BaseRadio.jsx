import React from "react"

import styles from "./style.module.scss"

// Переиспользуемый UI компонент для радиобаттона
const BaseRadio = ({
                       name,
                       options,
                       label = "",
                       placeholder = "",
                       type = "text",
                       width = 100,
                       value,
                       required = false,
                       disabled = false,
                       addClass,
                       icon = "",
                       ...props
                   }) => {
    const classes = [styles.radio__wrap, addClass]
    return (
        <>
            <span className={styles.radio__label}>{label}</span>
            <div key={name} style={{width: width + "%"}} className={classes.join(" ")}>
                {options.map((el, index) => {
                    return (
                        <div key={index}>
                            <label htmlFor={el.value}>
                                <input
                                    id={el.value}
                                    name={name}
                                    type="radio"
                                    value={el.value}
                                    {...props}
                                    hidden
                                />
                                <div className={
                                    `${styles.radio__item} 
                                    d-flex 
                                    justify-content-center 
                                    align-content-center
                                    ${value === el.value && styles.radio__itemActive}
                                    `}>{el.value}</div>
                            </label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default BaseRadio
