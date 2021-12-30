import React, {useState} from 'react'

import styles from "./style.module.scss"

// Переиспользуемый UI компонент для выпадающего селекта
const BaseSelect = ({
                        options,
                        name = "",
                        placeholder = "",
                        width = 100,
                        value,
                        label = "",
                        onSelect = () => ({}),
                        addClass = ""
                    }) => {
    const option = options.find(o => o.id === value)
    const [isShow, setIsShow] = useState()
    if (option) {
        placeholder = option.value
    }
    const onSelectHandler = (option) => {
        toggle()
        onSelect(option.id, name, option)
    }
    const toggle = () => setIsShow(prev => !prev)
    const bodyCls = [styles.select__body]
    if (isShow) {
        bodyCls.push(styles.select__body_open)
    }
    const inputCls = [styles.select__input]
    let classes = ["p-3", styles.select__inputItem, addClass]
    if (isShow) {
        classes.push(styles.select__inputClosed)
    }

    return (
        <div className={`${styles.select}`} style={{width: width + "%"}}>
            <div className={inputCls.join(" ")}>
                {label &&
                    <label
                        htmlFor={name}
                        className={styles.select__label}
                    >{label}</label>
                }
                <input
                    id={name}
                    type="text"
                    className={classes.join(" ")}
                    onClick={toggle}
                    placeholder={placeholder}
                    readOnly/>
            </div>
            <div className={bodyCls.join(" ")}>
                {options.map(el => {
                    let optionsCls = [`p-3`, styles.select__option]
                    if (option && el.id === value) {
                        optionsCls.push(styles.select__option_active)
                    }
                    return (
                        <div
                            key={el.id}
                            className={optionsCls.join(" ")}
                            onClick={onSelectHandler.bind(null, el)}>
                            {el.value}
                        </div>
                    )
                })}
            </div>
            {isShow && <div className={styles.select__bg} onClick={toggle}/>}
        </div>
    );
};

export default BaseSelect;
