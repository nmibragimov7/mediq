import React from 'react';

const SchedulerCard = ({day, onShowEvent}) => {
    return (
        <div className={"w-100 h-100 position-relative"}>
            <div>
                {day.day}
            </div>
            <div>
                {day.records.map(r => {
                    return <div key={r.id}>{r.text}</div>
                })}
                {!day.records.length && <button onClick={onShowEvent.bind(null, day.id)}>+</button>}
            </div>
        </div>
    );
};

export default SchedulerCard;
