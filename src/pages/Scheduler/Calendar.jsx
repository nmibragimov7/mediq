import React, { useState } from 'react';
import SchedulerRow from "./SchedulerRow";
import SchedulerCard from "./SchedulerCard";
import s from "./index.module.css";

const Calendar = ({data, onShowEvent, onRemove, onReplace}) => {
    const [currentCard, setCurrentCard] = useState(null)
    const setNextCard = (nextCard) => {
        onReplace(currentCard, nextCard)
    }

    return (
        <div className={"h-100"}>
            {
                data.map((days, i) => {
                    return <SchedulerRow classes={s.h25}
                                         key={i}>{
                        days.map(d => {
                            return <SchedulerCard key={d.id}
                                                  setCurrentCard={setCurrentCard}
                                                  setNextCard={setNextCard}
                                                  onShowEvent={onShowEvent}
                                                  onRemove={onRemove}
                                                  day={d}/>
                        })
                    }</SchedulerRow>
                })
            }
        </div>
    );
};

export default Calendar;
