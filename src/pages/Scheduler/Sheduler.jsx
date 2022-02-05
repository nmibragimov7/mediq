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
    const [now, setState] = useState(DateTime.local())
    return (
        <div className={"h-100 d-flex flex-column"}>
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
