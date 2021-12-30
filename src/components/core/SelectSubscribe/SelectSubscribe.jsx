import React, {useState} from "react"

import styles from "./style.module.scss"
import SubscribeDescription from "./SubscribeDescription"
import SubscribePayInfo from "./SubscribePayInfo"

// Компонент для выбора подписки
const SelectSubscribe = ({onSelect}) => {
    const [activeStep, setActiveStep] = useState(0)
    const next = () => {
        onSelect()
    }
    return (
        <div className={`${styles.select} h-100 d-flex flex-column`}>
            {activeStep === 0 && <SubscribeDescription onSelect={setActiveStep.bind(null, 1)}/>}
            {activeStep === 1 && <SubscribePayInfo next={next}/>}
        </div>
    );
};

export default SelectSubscribe;
