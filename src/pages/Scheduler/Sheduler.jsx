import React, {useMemo, useState, useEffect} from 'react';
import {Info, DateTime} from "luxon";
import SchedulerRow from "./SchedulerRow";
import Calendar from "./Calendar";
import {getArrayFromSize} from "../../fixtures/helpers";
import SelectEvent from "./SelectEvent";

const Scheduler = () => {
    const [modalData, setModalData] = useState({
        dateId: null,
        isShow: false
    })
    const onCloseModal = () => setModalData((prev) => ({...prev, isShow: false}))
    const onShowModal = (id) => {
        setModalData(prev => ({isShow: true, dateId: id}))
    }
    const weekdays = useMemo(() => {
        return Info.weekdays("short", {
            locale: "ru"
        })
    }, [])
    const [now, setNow] = useState(DateTime.local())
    const setMonth = (month) => {
        setNow((prev) => prev.plus({month}))
    }
    const [data, setData] = useState([])
    useEffect(() => {
        let count = -1
        const arrData = getArrayFromSize(5).map(el => {
            return weekdays.map(e => {
                count++
                return {
                    id: count,
                    day: now.startOf("week").plus({day: count}).day,
                    records: []
                }
            })
        })
        setData(() => arrData)
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
            <div className="row">
                <div className="col-4">
                    <button onClick={setMonth.bind(null, -1)}>пред</button>
                </div>
                <div className={"col-4"}>
                    {now.toFormat("dd/MM/yyyy")}
                </div>
                <div className="col-4">
                    <button onClick={setMonth.bind(null, 1)}>След</button>
                </div>
            </div>
            <SchedulerRow>
                {weekdays.map(d => (<div className={"w-100"} key={d}>{d.toUpperCase()}</div>))}
            </SchedulerRow>
            <div className={"flex-grow-1"}>
                <Calendar onShowEvent={onShowModal} data={data}/>
            </div>
            <SelectEvent isShow={modalData.isShow}
                         onSelect={onAddEvent}
                         setIsShow={onCloseModal}/>
        </div>
    );
};

export default Scheduler;
