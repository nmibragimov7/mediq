import React from 'react';
import SchedulerRow from "./SchedulerRow";
import SchedulerCard from "./SchedulerCard";
import s from "./indes.module.css"


const Calendar = ({data, onShowEvent}) => {
    return (
        <div className={"h-100"}>
            {
                data.map((days, i) => {
                    return <SchedulerRow classes={s.h25}
                                         key={i}>{
                        days.map(d => {
                            return <SchedulerCard key={d.id}
                                                  onShowEvent={onShowEvent}
                                                  day={d}/>
                        })
                    }</SchedulerRow>
                })
            }
        </div>
    );
};

export default Calendar;
