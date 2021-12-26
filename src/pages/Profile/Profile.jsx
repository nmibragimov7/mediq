import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate, useParams} from "react-router-dom"
import {useSelector} from "react-redux";

import Banner from "../../components/core/Banner/Banner"
import styles from "./style.module.scss"
import {tabs} from "../../fixtures/tabs"
import {records} from "../../store/getters/getters";

const Profile = () => {
    const [activeTab, setActiveTab] = useState()
    const items = useSelector(records)
    const navigate = useNavigate()
    const location = useLocation()
    const {id} = useParams()
    useEffect(() => {
        setActiveTab(location.hash)
        !location.hash && setActiveTab("#records")
    }, [location.pathname])
    const switchTab = (hash) => {
        navigate(`/profile${hash}`)
        setActiveTab(hash)
    }
    const cardHandler = (redordId) => {
        navigate(`/profile/records/${redordId}`)
    }

    return (
        <>
            {
                !id && (
                    <div>
                        <Banner/>
                        <div className={`${styles.tabs} d-flex`}>
                            {
                                tabs.map(tab => {
                                    return (
                                        <div
                                            key={tab.hash}
                                            className={`${styles.tabs__link} ${activeTab === tab.hash && styles.activeLink}`}
                                            onClick={switchTab.bind(null, tab.hash)}>{tab.name}</div>
                                    )
                                })
                            }
                        </div>
                        {
                            (activeTab === "#records") && (
                                <>
                                    {
                                        items.map(record => (
                                            <div key={record.id} className={`${styles.profile__card} mb-5`} onClick={cardHandler.bind(null, record.id)}>
                                                <div className="d-flex justify-content-between align-content-center mb-3">
                                                    <p className={styles.card__title}>{record.polyclinic}</p>
                                                    <div>
                                                        <span className={`${styles.card__date} ${styles.card__textGray}`}>Дата: {record.date}</span>
                                                        <span className={`${styles.card__date} ${styles.card__textGray} ml-4`}>Время: {record.time}</span>
                                                    </div>
                                                </div>
                                                <p className={`${styles.card__text} ${styles.card__textGray} mb-2`}>Услуга</p>
                                                <p className={`${styles.card__text} mb-2`}>Прием: {record.service}</p>
                                                <p className={`${styles.card__text} ${styles.card__textGray} mb-2`}>Причина обращения</p>
                                                <p className={styles.card__text}>{record.reason}</p>
                                            </div>
                                        ))
                                    }
                                </>
                            )
                        }
                        {
                            (activeTab === "#history") && (
                                <>
                                    History
                                </>
                            )
                        }
                    </div>
                )
            }
        </>
    );
};

export default Profile;
