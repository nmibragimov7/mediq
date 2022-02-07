import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import AnalyzCard from "../../components/core/AnalyzCard/AnalyzCard"
import { analyzes } from "../../store/getters/getters"
import { setSelectedDoctor } from "../../store/doctors/actions"
import BaseModal from "../../components/base/BaseModal/BaseModal"

// Страница анализы
const Analyzes = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const items = useSelector(analyzes)
    const [isMShowed, setIsMShowed] = useState(false)
    const toggleModal = () => {
        setIsMShowed(prev => !isMShowed)
    }
    const book = (item) => {
        navigate("/records/new-record")
        dispatch(setSelectedDoctor({
            name: item.doctor,
            position: item.position
        }))
    }

    return (
        <div>
            <div className={"h-100 d-flex flex-column"}>
                { items.length &&
                items.map(item => {
                    return (
                        <AnalyzCard key={item.id} item={item} book={book} toggleModal={toggleModal}/>
                    )
                })
                }
            </div>
            <BaseModal isShowed={isMShowed} onClose={toggleModal}>
                <div className={"d-flex"}>
                    <div>Me</div>
                    <div>You</div>
                </div>
            </BaseModal>
        </div>
    );
};

export default Analyzes;
