import React from "react"

import s from "./style.module.scss"

// Переиспользуемый UI компонент для чекбокса
const BaseCheckbox = ({
                          label, checked,
                          name = "",
                          width = 100,
                          ...props
                      }) => {
        const clsCheckbox = [s.input]
        if (checked) {
            clsCheckbox.push(s.input__active)
        }
        return (
            <div className={"d-flex align-items-center"} style={{width: width + "%"}}>
                <label className={s.input__wrap}>
                    <input checked={checked} type="checkbox" name={name} {...props}/>
                    <div className={clsCheckbox.join(" ")}>

                    </div>
                </label>
                <p className={`${s.label} ml-3`}>
                    {label}
                </p>
            </div>
        );
    }
;

export default BaseCheckbox;
