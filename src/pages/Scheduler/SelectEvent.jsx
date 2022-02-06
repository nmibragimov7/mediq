import React, {useState} from 'react';
import BaseModal from "../../components/base/BaseModal/BaseModal";

import {records as fixtures} from "../../fixtures/records";

const SelectEvent = ({
                         isShow,
                         onSelect = () => {
                         },
                         setIsShow = () => {},
                     }) => {
    const [records, setRecords] = useState(fixtures)
    const onSelectHandler = (record) => {
        setIsShow(false)
        onSelect(record)
    }
    return (
        <BaseModal isShowed={isShow} onClose={setIsShow.bind(null, false)}>
            {records.map(r => {
                return <div key={r.id} onClick={onSelectHandler.bind(null, r)}>{r.text}</div>
            })}
        </BaseModal>
    );
};

export default SelectEvent;
