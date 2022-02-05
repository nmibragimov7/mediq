import React, {useMemo} from 'react';
import SchedulerRow from "./SchedulerRow";
import SchedulerCard from "./SchedulerCard";
import s from "./indes.module.css"

const getArrayFromSize = (num) => new Array(num).fill(undefined).map((_, i) => i);

const Calendar = ({now}) => {
    const daysInWeek = getArrayFromSize(7)
    let count = -1
    return (
        <div className={"h-100"}>
            {
                getArrayFromSize(5).map(e => {
                    return <SchedulerRow classes={s.h25}
                                         key={e}>{
                        daysInWeek.map(d => {
                            count++
                            return <SchedulerCard key={d}
                                                  day={now.startOf("week").plus({day: count}).day}/>
                        })
                    }</SchedulerRow>
                })
            }
        </div>
    );
};

export default Calendar;
