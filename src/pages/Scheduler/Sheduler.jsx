import React, {useMemo, useState} from 'react';
import {Info, DateTime} from "luxon";
import SchedulerRow from "./SchedulerRow";
import Calendar from "./Calendar";


const Scheduler = () => {
    const weekdays = useMemo(() => {
        return Info.weekdays("short", {
            locale: "ru"
        })
    }, [])
    const [now, setNow] = useState(DateTime.local())
    const setMonth = (month) => {
        setNow((prev) => prev.plus({month}))
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
                <Calendar now={now}/>
            </div>
        </div>
    );
};

export default Scheduler;
