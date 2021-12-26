import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

import styles from "./style.module.scss"

const BaseDatePicker = ({date, ...props}) => {

    return (
        <>
            <DatePicker
                selected={date}
                {...props}
                />
        </>
    )
}

export default BaseDatePicker
