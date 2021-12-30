import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"

import styles from "./style.module.scss"
import {records} from "../../store/getters/getters"

const RecordDetail = () => {
    const [record, setRecord] = useState(null)
    const {id} = useParams()
    const items = useSelector(records)
    useEffect(() => {
        if (id) {
            const index = items.findIndex(item => item.id === parseInt(id))
            setRecord(items[index])
        }
    }, [id, items])


    return (
        <>
            {
                record && (
                    <>
                        <div className={styles.card__item}>
                            <div className="d-flex justify-content-between align-content-center mb-3">
                                <p className={styles.card__title}>{record.polyclinic}</p>
                                <div>
                                    <span
                                        className={`${styles.card__date} ${styles.card__textGray}`}>Дата: {record.date}</span>
                                    <span
                                        className={`${styles.card__date} ${styles.card__textGray} ml-4`}>Время: {record.time}</span>
                                </div>
                            </div>
                            <p className={`${styles.card__text} ${styles.card__textGray} mb-2`}>Услуга</p>
                            <p className={`${styles.card__text} mb-2`}>Прием: {record.service}</p>
                        </div>
                        <div className={styles.card__item}>
                            <p className={`${styles.card__text} ${styles.card__textGray} mb-2`}>Причина обращения</p>
                            <p className={`${styles.card__text} mb-2`}>{record.reason}</p>
                        </div>
                        <div className={styles.card__item}>
                            <p className={`${styles.card__text} ${styles.card__textGray} mb-2`}>Врач</p>
                            <p className={`${styles.card__text} mb-2`}>{record.doctor}</p>
                        </div>
                        <div className={styles.card__item}>
                            <p className={`${styles.card__text} ${styles.card__textGray} mb-2`}>Отделение</p>
                            <p className={`${styles.card__text} mb-2`}>{record.department}</p>
                        </div>
                        <div className={styles.card__item}>
                            <p className={`${styles.card__text} ${styles.card__textGray} mb-2`}>Заключительный диагноз</p>
                            <p className={`${styles.card__text} mb-2`}>{record.diagnosis}</p>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default RecordDetail
