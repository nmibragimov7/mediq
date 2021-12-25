import React from "react"

import styles from "./style.module.scss"

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
                        <>
                            <label
                                key={index}
                                htmlFor={el.value}
                            >
                                <input
                                    key={index + 1}
                                    id={el.value}
                                    name={name}
                                    type="radio"
                                    value={el.value}
                                    {...props}
                                    hidden
                                />
                                <div key={index + 2} className={
                                    `${styles.radio__item} 
                                    d-flex 
                                    justify-content-center 
                                    align-content-center
                                    ${value === el.value && styles.radio__itemActive}
                                    `}>{el.value}</div>
                            </label>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default BaseRadio
