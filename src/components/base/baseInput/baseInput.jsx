import styles from "./style.module.scss"

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
                                      ...props
                                  }) {
    const inputClass = [styles.input, addClass]
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
            </div>
        </>
    )
}
