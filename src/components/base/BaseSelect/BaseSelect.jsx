import React, {useState} from 'react';
import styles from "./style.module.scss"

const BaseSelect = ({
                        options,
                        name = "",
                        placeholder = "",
                        width = 100,
                        value,
                        onSelect = () => ({}),
                        classes = ""
                    }) => {
    const option = options.find(o => o.id === value)
    const [isShow, setIsShow] = useState()
    if (option) {
        placeholder = option.value
    }
    const onSelectHandler = (option) => {
        onSelect(option.id, name, option)
    }
    const toggle = () => setIsShow(prev => !prev)
    const bodyCls = [styles.select__body]
    if (isShow) {
        bodyCls.push(styles.select__body_open)
    }
    const inputCls = [styles.select__input]
    if (isShow) {
        inputCls.push(styles.select__input_closed)
    }
    return (
        <div className={`${styles.select} ${classes}`} style={{width: width + "%"}}>
            <div className={inputCls.join(" ")}>
                <input type="text" className={"p-3"} onClick={toggle} placeholder={placeholder}/>
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
