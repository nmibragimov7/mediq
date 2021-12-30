import React from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    BarChart,
    Bar
} from 'recharts'

import styles from "./style.module.scss"

const Tracker = () => {
    const steps = [
        {
            week: "ПН",
            steps: 8000
        },
        {
            week: "ВТ",
            steps: 2000
        },
        {
            week: "СР",
            steps: 9000
        },
        {
            week: "ЧТ",
            steps: 7000
        },
        {
            week: "ПТ",
            steps: 13000
        },
        {
            week: "СБ",
            steps: 8000
        },
        {
            week: "ВС",
            steps: 1000
        }
    ]
    const weeks = [
        {
            pulse: "Mo",
            "пульс": 1
        },
        {
            pulse: "Tu",
            "пульс": 3
        },
        {
            pulse: "We",
            "пульс": 2
        },
        {
            pulse: "Th",
            "пульс": 4
        },
        {
            pulse: "Fr",
            "пульс": 6
        },
        {
            pulse: "Sa",
            "пульс": 5
        },
        {
            pulse: "Su",
            "пульс": 9
        }
    ]
    const hours = [
        {
            hour: "9",
            "сон (ч)": 10
        },
        {
            hour: "10",
            "сон (ч)": 1
        },
        {
            hour: "11",
            "сон (ч)": 5
        },
        {
            hour: "12",
            "сон (ч)": 3
        },
        {
            hour: "1",
            "сон (ч)": 4
        },
        {
            hour: "2",
            "сон (ч)": 2
        },
        {
            hour: "3",
            "сон (ч)": 10
        },
        {
            hour: "4",
            "сон (ч)": 1
        },
        {
            hour: "6",
            "сон (ч)": 0
        },
        {
            hour: "7",
            "сон (ч)": 10
        }
    ]

    return (
        <>
            <div className={styles.tracker}>
                <div>
                    <p className={styles.tracker__title}>Пульс</p>
                    <div className={`${styles.tracker__item} d-flex`}>
                        <div className={styles.tracker__left}>
                            <p>Подъем</p>
                            <p>Сон</p>
                            <p>Глубокий сон</p>
                        </div>
                        <div style={{width: "100%"}}>
                            <ResponsiveContainer width="100%" height={350}>
                                <AreaChart
                                    fontSize={14}
                                    data={hours}>
                                    <XAxis hide dataKey="hour"/>
                                    <YAxis hide/>
                                    <Area type="monotone" dataKey="сон (ч)" stroke="#6A35F7"
                                          fill="rgba(175, 147, 198, 0.25)"/>
                                    <Tooltip/>
                                </AreaChart>
                            </ResponsiveContainer>
                            <div className="d-flex justify-content-between align-items-center">
                                {
                                    hours.map(item => {
                                        return (
                                            <span>{item.hour}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={styles.tracker__title}>Глубина сна</p>
                    <div className={`${styles.tracker__item} d-flex justify-content-center`}>
                        <div style={{width: "100%"}}>
                            <ResponsiveContainer width="100%" height={350}>
                                <AreaChart
                                    fontSize={14}
                                    data={weeks}>
                                    <XAxis hide dataKey="pulse"/>
                                    <YAxis hide/>
                                    <Area dataKey="пульс" stroke="#6A35F7" fill="rgba(175, 147, 198, 0.1)"/>
                                    <Tooltip/>
                                </AreaChart>
                            </ResponsiveContainer>
                            <div className="d-flex justify-content-around align-items-center">
                                {
                                    weeks.map(item => {
                                        return (
                                            <span style={{color: "#A9ABBD"}}>{item.pulse}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.tracker__lastChild}>
                    <p className={styles.tracker__title}>Количество шагов</p>
                    <br/>
                    <div>
                        <ResponsiveContainer width="100%" height={450}>
                            <BarChart data={steps}>
                                <XAxis dataKey="week"/>
                                <YAxis/>
                                {/*<Tooltip/>*/}
                                <Bar dataKey="steps" fill="#6A35F7"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Tracker;
