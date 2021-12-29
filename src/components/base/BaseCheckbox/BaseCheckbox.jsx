import React from "react";
import s from "./style.module.scss"

const BaseCheckbox = ({
                          label, value, name = "", width = 100
                      }) => {
        return (
            <div className={"d-flex align-items-center"} style={{width: width + "%"}}>
                <div>
                    <input type="checkbox" name={name} value={value}/>
                </div>
                <p className={`${s.label} ml-2`}>
                    {label}
                </p>
            </div>
        );
    }
;

export default BaseCheckbox;
