import styles from "./style.module.scss"

export default function BaseButton({
                                       width = 100,
                                       type = "primary",
                                       classes = "",
                                       ...props
                                   }) {
    const btnsCls = [styles.button, classes]
    if (type === 'link') {
        btnsCls.push(styles.button__link)
    }
    return (
        <>
            <div
                className={styles.button__wrap}
                style={{width: width + "%"}}
            >
                <button
                    className={btnsCls.join(" ")}
                    {...props}
                >
                    {props.children}
                </button>
            </div>
        </>
    )
}
