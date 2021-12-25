import React, {useState} from "react"

import styles from "./style.module.scss"
import BaseInput from "../../components/base/BaseInput/BaseInput"
import BaseSelect from "../../components/base/BaseSelect/BaseSelect"
import BaseTextarea from "../../components/base/BaseTextarea/BaseTextarea";
import BaseRadio from "../../components/base/BaseRadio/BaseRadio";
import BaseButton from "../../components/base/BaseButton/BaseButton";

const NewRecord = () => {
    const [form, setForm] = useState({
        date: "",
        time: "",
        gender: "",
        name: "",
        age: "",
        reason: ""
    })
    const options = [{
            id: 1,
            value: "20 - 25"
        },
        {
            id: 2,
            value: "26 - 30"
        },
        {
            id: 3,
            value: "31 - 35"
        }, {
            id: 4,
            value: "36 - 40"
        }]
    const times = [{
            id: 1,
            value: "09:00"
        },
        {
            id: 2,
            value: "09:30"
        },
        {
            id: 3,
            value: "10:00"
        }, {
            id: 4,
            value: "10:30"
        }, {
            id: 5,
            value: "11:00"
        }, {
            id: 6,
            value: "11:30"
        }, {
            id: 7,
            value: "12:00"
        }, {
            id: 8,
            value: "12:30"
        }, {
            id: 9,
            value: "13:00"
        }, {
            id: 10,
            value: "13:30"
        }, {
            id: 11,
            value: "14:00"
        }, {
            id: 12,
            value: "14:30"
        }]
    const genders = [{
            id: 1,
            value: "Мужской"
        }, {
            id: 2,
            value: "Женский"
        }]
    const onChangeHandler = (id, name) => {
        setForm(prev => ({...prev, [name]: id}))
    }
    const handleChange = (e) => {
        setForm(form => ({...form, [e.target.name]: e.target.value}))
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className={styles.record}>
                <p className={`${styles.record__title} mb-4`}>Новая запись</p>
                <div className={styles.record__form} style={{marginBottom: "85px"}}>
                    <div>Datepicker</div>
                    <div>
                        <p className={`${styles.record__subtitle} mb-3`}>Свободное время</p>
                        <BaseRadio
                            name="time"
                            value={form.time}
                            addClass="mb-5"
                            onChange={handleChange}
                            options={times}/>
                        <BaseRadio
                            name="gender"
                            label="Пол"
                            value={form.gender}
                            onChange={handleChange}
                            options={genders}/>
                    </div>
                </div>
                <div className={styles.record__form}>
                    <div>
                        <p className={`${styles.record__subtitle} mb-3`}>Детали пациента</p>
                        <BaseInput addClass={`${styles.record__input} mb-3`}
                                   name="name"
                                   label="ФИО"
                                   required={true}
                                   value={form.name}
                                   onChange={handleChange}
                                   placeholder="Выедите значение"/>
                        <BaseSelect name={"age"}
                                    label={"Возраст"}
                                    addClass={styles.record__select}
                                    value={form.age}
                                    onSelect={onChangeHandler}
                                    placeholder={"Выберите возраст"}
                                    options={options}/>
                    </div>
                    <div style={{width: "80%"}} className="d-flex flex-column justify-content-end align-items-end">
                        <BaseTextarea name={"reason"}
                                      rows={7}
                                      value={form.reason}
                                      addClass={"mt-5"}
                                      label={"Причина обращения"}
                                      placeholder={"Опишите причину"}
                                      onChange={handleChange}
                                      style={{marginBottom: "55px"}}/>
                        <BaseButton width={40} classes={styles.record__button}>Записаться</BaseButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewRecord
