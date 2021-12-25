import React, {useState} from 'react';
import BaseButton from "../../base/baseButton/baseButton";
import s from "./style.module.scss"
import BaseModal from "../../base/BaseModal/BaseModal";

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
            <div className={s.banner}>
                <div className={s.banner__img}>
                    <img className={"w-100"} src="/images/base-sub-full.png" alt=""/>
                </div>
                <div className={s.banner__body}>
                    <div className={"p-4 d-flex flex-column justify-content-between h-100"}>
                        <div>
                            <h3 className={s.banner__title}>Базовая Подписка</h3>
                            <div className={"mt-5"}>
                                <p className={"py-1"}>Что входит</p>
                                <p className={"py-1"}>Услуга 1</p>
                                <p className={"py-1"}>Услуга 2</p>
                                <p className={"py-1"}>Услуга 3</p>
                                <p className={"py-1"}>Услуга 4</p>
                                <p className={"py-1"}>Услуга 5</p>
                            </div>
                        </div>
                        <p className={`${s.banner__footer} d-flex align-items-center p-3`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere justo quis elit
                            porta
                            pretium. Maecenas fermentum justo eu mauris imperdiet iaculis. Praesent iaculis nisl at
                            rhoncus
                            scelerisque. Praesent suscipit risus quis arcu accumsan laoreet. Morbi ac magna rutrum,
                            tempor
                            velit eget, congue est.
                        </p>
                    </div>
                </div>
            </div>
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
