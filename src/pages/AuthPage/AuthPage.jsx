import styles from "./style.module.scss"
import BaseInput from "../../components/base/BaseInput/BaseInput";
import {useState} from "react";
import BaseButton from "../../components/base/BaseButton/BaseButton";
import {useDispatch} from "react-redux";
import {userAuthorizate} from "../../store/auth/actions";

export default function AuthPage() {
    const [form, setForm] = useState({
        login: "",
        password: ""
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setForm(form => ({...form, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(userAuthorizate(
            {...form}
        ))
    }

    return (
        <div className={`${styles.main} h-100vh`}>
            <div className="container h-100">
                <div className="row py-5 h-100">
                    <div className="col-4">
                        <div className={"d-flex h-100 flex-column"}>
                            <div className={styles.logoWrap}>
                                <img src={"images/logo.svg"} alt="Logo" className={styles.logo}/>
                            </div>
                            <div className={"flex-grow-1 d-flex flex-column"}>
                                <div className={`text-center mt-3 ${styles.main__item}`}>
                                    <p className={`${styles.main__title} mb-3`}>Estés donde estés</p>
                                    <p className={styles.main__subtitle}>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Ut.</p>
                                </div>
                                <form onSubmit={onSubmit}>
                                    <BaseInput
                                        addClass="mb-3"
                                        name="login"
                                        type={"email"}
                                        required={true}
                                        value={form.login}
                                        onChange={handleChange}
                                        placeholder="Логин"
                                    />
                                    <BaseInput
                                        addClass="mb-4"
                                        name="password"
                                        required={true}
                                        type="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="Пароль"
                                    />
                                    <BaseButton
                                        onClick={onSubmit}
                                    >
                                        Войти
                                    </BaseButton>

                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
