import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {toast} from 'react-toastify'

import styles from "./style.module.scss"
import BaseInput from "../../components/base/BaseInput/BaseInput"
import BaseSelect from "../../components/base/BaseSelect/BaseSelect"
import BaseTextarea from "../../components/base/BaseTextarea/BaseTextarea"
import BaseRadio from "../../components/base/BaseRadio/BaseRadio"
import BaseButton from "../../components/base/BaseButton/BaseButton"
import BaseDatePicker from "../../components/base/BaseDatePicker/BaseDatePicker"
import {selectedDoctor} from "../../store/getters/getters"
import {addRecord} from "../../store/records/actions"

// Страница ввода данных для новой записи к врачу
const NewRecord = () => {
    const doctor = useSelector(selectedDoctor)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        date: "",
        time: "",
        gender: "",
        name: "",
        age: "",
        reason: ""
    })
    const options = [
        {
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
    const times = [
        {
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
    const genders = [
        {
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
        if(!doctor) {
            toast.error("Вернитесь на страницу выбора доктора", {
                position: "top-center"
            })
            return
        }
        dispatch(addRecord({
            id: Math.round(Math.random()*100+1),
            polyclinic: "Городская поликлиника №2",
            service: doctor.position,
            reason: form.reason,
            date: `${new Date(form.date).getDate()}.${new Date(form.date).getMonth() + 1}.${new Date(form.date).getFullYear()}`,
            time: form.time,
            doctor: doctor.name,
            department: "Терапевтическое",
            diagnosis: ""
        }))

        navigate("/profile")
        toast.success("Новая запись добавлена 👌", {
            position: "top-center"
        })
    }
    const handleDateChange = (date) => {
        setForm(form => ({...form, date: date}))
    }

    return (
        <>
            <div className={styles.record}>
                <p className={`${styles.record__title} mb-4`}>Новая запись</p>
                <div className={styles.record__form} style={{marginBottom: "85px"}}>
                    <div>
                        <BaseDatePicker date={form.date}
                                        width={70}
                                        onChange={handleDateChange}/>
                    </div>
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
                        <BaseButton width={40} classes={styles.record__button} onClick={onSubmit}>Записаться</BaseButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewRecord
