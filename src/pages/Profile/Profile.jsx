import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from "react-router-dom"

import Banner from "../../components/core/Banner/Banner"
import styles from "./style.module.scss"
import {tabs} from "../../fixtures/tabs"

const Profile = () => {
    const [activeTab, setActiveTab] = useState()
    const records = [
        {
            polyclinic: "Городская поликлиника №2",
            service: "Терапевт",
            reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere justo quis elit porta pretium. Maecenas fermentum justo eu mauris imperdiet iaculis.",
            date: "01.01.2022",
            time: "14:00"
        },
        {
            polyclinic: "Городская поликлиника №2",
            service: "Терапевт",
            reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere justo quis elit porta pretium. Maecenas fermentum justo eu mauris imperdiet iaculis.",
            date: "01.01.2022",
            time: "14:00"
        }
    ]
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        location.hash ? setActiveTab(location.hash.split("#")[1]) : setActiveTab("records")
    }, [location.hash])
    const switchTab = (hash) => {
        navigate(`/profile#${hash}`)
        setActiveTab(hash)
    }

    return (
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
                activeTab === "records" && (
                    <>
                        {
                            records.map(record => (
                                <div className={`${styles.profile__card} mb-5`}>
                                    <div className="d-flex justify-content-between align-content-center mb-3">
                                        <p className="card__title">{record.polyclinic}</p>
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
        </div>
    );
};

export default Profile;
