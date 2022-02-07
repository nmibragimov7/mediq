import React from 'react';
import BaseButton from "../../components/base/BaseButton/BaseButton";
import s from "./index.module.css";

const SchedulerCard = ({day, setCurrentCard, setNextCard, onShowEvent, onRemove}) => {
    let classes = [`w-100 h-100 position-relative d-flex flex-column justify-content-between align-items-center ${s.col}`]
    if (day.records.length > 0) {
        classes.push(s.gray);
    }
    const dragStartHandler = (e, item) => {
        setCurrentCard(() => item)
    }
    const dragOverHandler = (e) => {
        e.preventDefault()
    }
    const dropHandler = (e, item) => {
        e.preventDefault()
        setNextCard(item)
    }

    return (
        <div className={classes.join(" ")}
             draggable={true}
             onDragStart={(e) => dragStartHandler(e, day)}
             onDragOver={(e) => dragOverHandler(e)}
             onDrop={(e) => dropHandler(e, day)}>
            <div className={`d-flex justify-content-center align-items-center ${s.grow}`}>
                {day.day}
            </div>
            <div className={s.grow}>
                {day.records.map(r => {
                    return <div key={r.id} className={`d-flex flex-column justify-content-center align-items-center`}>
                        <div className={"mb-2"}
                             style={{"textAlign": "center", "cursor": "grab"}}>{r.text}</div>
                        <div className={`ml-1 ${s.buttonRemove}`} onClick={onRemove.bind(null, day.id)}>x</div>
                    </div>
                })}
                {!day.records.length && <BaseButton classes={`d-flex justify-content-center ${s.button}`}
                                                    onClick={onShowEvent.bind(null, day.id)}>+</BaseButton>}
            </div>
        </div>
    );
};

export default SchedulerCard;
