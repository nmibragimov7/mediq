import React, {useState} from 'react';

import BaseModal from "../../components/base/BaseModal/BaseModal";
import {records as fixtures} from "../../fixtures/records";
import s from "./index.module.css";


const SelectEvent = ({
                         isShow,
                         onSelect = () => {
                         },
                         setIsShow = () => {
                         },
                     }) => {
    const [records, setRecords] = useState(fixtures)
    const onSelectHandler = (record) => {
        setIsShow(false)
        onSelect(record)
    }
    return (
        <BaseModal  isShowed={isShow} onClose={setIsShow.bind(null, false)}>
           <div className={"px-4 py-2"}>
               <h3 className={"mb-2"}>Выберите событие</h3>
               {records.map(r => {
                   return <div key={r.id} className={`mb-2 ${s.event}`}
                               onClick={onSelectHandler.bind(null, r)}>{r.text}</div>
               })}
           </div>
        </BaseModal>
    );
};

export default SelectEvent;
