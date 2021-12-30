import styles from "./style.module.scss"

// Переиспользуемый UI компонент для ввода данных
export default function BaseInput({
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
                                      icon = "",
                                      ...props
                                  }) {
    const inputClass = [styles.input, addClass, icon && styles.inputPaddingLeft]
    if (error) {
        inputClass.push(styles.inputError)
    }

    return (
        <>
            <div
                className={styles.input__wrap}
                style={{width: width + "%"}}
            >
                {label &&
                    <label
                        htmlFor={name}
                        className={styles.input__label}
                    >{label}</label>
                }
                <input
                    id={name}
                    name={name}
                    type={type}
                    required={required}
                    className={inputClass.join(" ")}
                    value={value}
                    disabled={disabled}
                    placeholder={placeholder}
                    {...props}
                />
                {
                    icon && <img src={`/images/${icon}`} alt="" className={styles.input__icon}/>
                }
            </div>
        </>
    )
}
