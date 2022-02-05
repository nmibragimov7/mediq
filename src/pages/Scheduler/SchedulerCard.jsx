import React from 'react';

const SchedulerCard = ({day}) => {
    return (
        <div className={"w-100 h-100"}>
            <div>
                {day}
            </div>
        </div>
    );
};

export default SchedulerCard;
