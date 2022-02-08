import React, {useMemo, useState, useEffect} from 'react'
import {Info, DateTime} from "luxon"
import {useDispatch, useSelector} from "react-redux"

import SchedulerRow from "./SchedulerRow"
import Calendar from "./Calendar"
import {getArrayFromSize} from "../../fixtures/helpers"
import SelectEvent from "./SelectEvent"
import BaseButton from "../../components/base/BaseButton/BaseButton"
import {saveData} from  "../../store/scheduler/actions"
import {scheduler} from "../../store/getters/getters"

const Scheduler = () => {
    const dispatch = useDispatch()
    const items = useSelector(scheduler)
    const [modalData, setModalData] = useState({
        dateId: null,
        isShow: false
    })
    const onCloseModal = () => setModalData((prev) => ({...prev, isShow: false}))
    const onShowModal = (id) => {
        setModalData(prev => ({isShow: true, dateId: id}))
    }
    const onRemove = (id) => {
        setData(dayRows => {
            return dayRows.map(days => {
                const arr = days.map(d => {
                    if (d.id === id) {
                        return {...d, records: []}
                    }
                    return d
                })
                return arr
            })
        })
    }
    const onReplace = (currentCard, nextCard) => {
        setData(dayRows => {
            return dayRows.map(days => {
                const arr = days.map(d => {
                    if (d.id === nextCard.id && currentCard.records.length > 0) {
                        return {...d, records: currentCard.records}
                    } else if (d.id === currentCard.id && currentCard.records.length > 0) {
                        return {...d, records: []}
                    }
                    return d
                })
                return arr
            })
        })
    }
    const weekdays = useMemo(() => {
        return Info.weekdays("short", {
            locale: "ru"
        })
    }, [])
    const [now, setNow] = useState(DateTime.local().startOf("month"))
    const setMonth = (month) => {
        const arr = data.reduce((prev, current) => {
            current.forEach(item => {
                if(item.records.length) {
                    prev.push(item)
                }
            })

            return prev
        }, items)

        saveData(arr)
        setNow((prev) => prev.plus({month}))
    }
    const [data, setData] = useState([])
    useEffect(() => {
        let count = -1
        const arrData = getArrayFromSize(5).map(el => {
            return weekdays.map(e => {
                count++
                return {
                    id: now.startOf("week").plus({day: count}).toFormat("dd.MM.yyyy"),
                    day: now.startOf("week").plus({day: count}).day,
                    records: []
                }
            })
        })
        const copy = arrData.map(row => {
            return row.map(col => {
                const i = items.findIndex(item => item.id === col.id)
                if(i >= 0) {
                    const copy = items[i]
                    items.splice(i, 1)
                    return copy
                }
                return col
            })
        })
        setData(prev => copy)
    }, [now])
    const onAddEvent = (record) => {
        setData(dayRows => {
            let isAdded = false
            return dayRows.map(days => {
                const arr = days.map(d => {
                    if (isAdded) return d;
                    if (d.id === modalData.dateId) {
                        isAdded = true
                        return {...d, records: d.records.concat(record)}
                    }
                    return d
                })
                return arr
            })
        })
    }
    return (
        <div className={"h-100 d-flex flex-column"}>
            <div className="row mb-3 d-flex align-items-center">
                <div className="col-5">
                    <BaseButton onClick={setMonth.bind(null, -1)} width={40}>Предыдущий</BaseButton>
                </div>
                <div className={"col-2"}>
                    {now.toFormat("LLLL yyyy", {locale: "ru"}).toUpperCase()}
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <BaseButton onClick={setMonth.bind(null, 1)} width={40}>Следующий</BaseButton>
                </div>
            </div>
            <SchedulerRow>
                {weekdays.map(d => (
                    <div className={"w-100 d-flex justify-content-center p-2"} key={d}><strong>{d.toUpperCase()}</strong></div>))}
            </SchedulerRow>
            <div className={"flex-grow-1"}>
                <Calendar onShowEvent={onShowModal}
                          onRemove={onRemove}
                          onReplace={onReplace}
                          data={data}/>
            </div>
            <SelectEvent isShow={modalData.isShow}
                         onSelect={onAddEvent}
                         setIsShow={onCloseModal}/>
        </div>
    );
};

export default Scheduler;
