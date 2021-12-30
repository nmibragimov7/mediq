import React, {useState} from "react"

import BaseButton from "../../base/BaseButton/BaseButton"
import s from "./style.module.scss"
import BaseModal from "../../base/BaseModal/BaseModal"
import SubscribeCard from "../SubscribeCard/SubscribeCard"

// Компонент для отображения выбранной подписки
const SubscribedPerson = ({unSubscribe}) => {
    const [isMShowed, setIsMShowed] = useState(false)
    const toggleModal = () => {
        setIsMShowed(prev => !isMShowed)
    }
    const unSubscribeSuccess = () => {
        unSubscribe()
        setIsMShowed(false)
    }
    return (
        <div>
            <SubscribeCard/>
            <div className={"d-flex mt-5 justify-content-center"}>
                <BaseButton width={35} classes={"py-4"} onClick={toggleModal}>
                    Отменить подписку
                </BaseButton>
            </div>
            <BaseModal isShowed={isMShowed} onClose={toggleModal}>
                <div className={"text-center"}>
                    <h5 className={`${s.modal_title} mb-3`}>Вы уверены что хотите отменить подписку?</h5>
                    <p className={"mb-3"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere justo quis elit porta
                        pretium. Maecenas fermentum justo eu mauris imperdiet iaculis. Praesent iaculis nisl at rhoncus
                        scelerisque.
                    </p>
                    <div className={"d-flex justify-content-between"}>
                        <BaseButton width={45} onClick={unSubscribeSuccess}>Да</BaseButton>
                        <BaseButton width={45} onClick={toggleModal}>Нет</BaseButton>
                    </div>
                </div>
            </BaseModal>
        </div>
    );
};

export default SubscribedPerson;
