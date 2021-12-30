import styles from "./style.module.scss"

// Переиспользуемый UI компонент для ввода данных
const BaseTextarea = ({
                          name,
                          label = "",
                          placeholder = "",
                          type = "text",
                          width = 100,
                          value,
                          required = false,
                          disabled = false,
                          error = false,
                          addClass,
                          cols = 5,
                          rows = 5,
                          icon = "",
                          ...props}) => {
    const classes = ["d-flex flex-column", addClass]

    return (
        <>
            <div
                className={classes.join(" ")}
                style={{width: width + "%"}}>
                {label &&
                <label
                    htmlFor={name}
                    className={styles.textarea__label}
                >{label}</label>
                }
                <textarea
                    id={name}
                    name={name}
                    className={styles.textarea}
                    cols={cols}
                    rows={rows}
                    value={value}
                    placeholder={placeholder}
                    {...props}></textarea>
            </div>
        </>
    )
}

export default BaseTextarea
