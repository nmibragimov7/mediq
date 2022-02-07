import React from "react";
import s from "./style.module.scss"
import BaseButton from '../../base/BaseButton/BaseButton'

// Карточка для анализа
const AnalyzCard = ({item, book, toggleModal}) => {
    return (
        <div className={`${s.c} p-4 mb-3`}>
            <div className={"d-flex align-items-center mb-1"}>
                <div className={"mr-1"}>
                    <img className={"w-100"} src="images/man.png" alt=""/>
                </div>
                <h5 className={s.c__color}>{item && item.doctor}</h5>
                <span
                    className={
                        `${s.c__color} ml-2`}>{item && item.tiem}</span>
            </div>
            <div className={"mb-2"}>
                <h5 className={s.c__color}>{item && item.title}:</h5>
                <p className={s.c__color}>
                    {item && item.description}
                </p>
            </div>
            <div className={"row mt-3 align-items-center"}>
                <div className={`col-4`}>
                    <div className={`d-flex align-items-center mr-3 justify-content-between p-3 ${s.c__btns}`}>
                        <div>
                            <h5 className={s.c__color}>Informe Terapia1</h5>
                            <p className={s.c__color}>Rellena el informe</p>
                        </div>
                        <div className={"d-flex align-items-center"}>
                            <button className={`mr-3 ${s.c__btn}`}>
                                <img className={"w-100"} src="/images/paper.png" alt="paper"/>
                            </button>
                            <button className={s.c__btn}>
                                <img className={"w-100"} src="/images/download-i.svg" alt="download"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"col-8 d-flex justify-content-end"}>
                    <BaseButton width={30} onClick={book.bind(null, item)}>Записаться</BaseButton>
                    <BaseButton width={30} classes={"ml-3"} onClick={toggleModal.bind(null)}>Видеозвонок</BaseButton>
                </div>
            </div>
        </div>
    );
};

export default AnalyzCard;
