import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

import styles from "./style.module.scss"
import BaseInput from "../../components/base/baseInput/baseInput"
import {doctors} from "../../store/getters/getters"

const SelectDoctor = () => {
    const [form, setForm] = useState({
        doctor: ""
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setForm(form => ({...form, [e.target.name]: e.target.value}))
    }
    const items = useSelector(doctors)
    const routeHandler = (item) => {
        console.log(item)
        if(item.available) {
            navigate("/records/new-record")
        }
    }

    return (
        <>
            <div className={styles.doctor}>
                <p className={`${styles.doctor__title} mb-4`}>Выберите врача</p>
                <div className="d-flex justify-content-center align-content-center mb-4">
                    <BaseInput
                        addClass={`${styles.doctor__input}`}
                        name="doctor"
                        required={true}
                        width={48}
                        value={form.doctor}
                        onChange={handleChange}
                        placeholder="Искать терапевта"
                        icon={"search.svg"}
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <div className={styles.doctor__item}>
                        {
                            items && items.map(item => {
                                return (
                                    <div
                                        key={item.id}
                                        className={`${styles.card} 
                                            d-flex 
                                            flex-column 
                                            justify-content-center 
                                            align-content-center
                                            ${!item.available && styles.cardDisabled}`}
                                        onClick={routeHandler.bind(null, item)}>
                                        <div className={styles.card__imageWrap}>
                                            <img src={`/images/${item.avatar}.png`} alt="" className={`${styles.card__image} mb-3`}/>
                                            {
                                                item.online && <div className={styles.cardOnline}></div>
                                            }
                                        </div>
                                        <div className={`${styles.card__title} mb-1`}>{item.name}</div>
                                        <div className={`${styles.card__subtitle} mb-1`}>{item.posititon}</div>
                                        <div className="d-flex justify-content-center">
                                            <img src="/images/rating.png" alt=""/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectDoctor
