import React from "react";
import s from "./style.module.scss"

const AnalyzCard = () => {
    return (
        <div className={`${s.c} p-4 mb-3`}>
            <div className={"d-flex align-items-center mb-1"}>
                <div className={"mr-1"}>
                    <img className={"w-100"} src="images/man.png" alt=""/>
                </div>
                <h5 className={s.c__color}>Док. Касымов</h5>
                <span
                    className={
                        `${s.c__color} ml-2`}>12:37</span>
            </div>
            <div className={"mb-2"}>
                <h5 className={s.c__color}> Semana 1:
                </h5>
                <p className={s.c__color}>
                    Vamos a comenzar, en esta primera semana nos vamos a centrar en conocer nuestro cuerpo con los
                    cambios del embarazo. Que posturas son las que nos ayudan a dejar el dolor de lado, ¡Comenzamos!
                </p>
            </div>
            <div className={"row mt-3"}>
                <div className={`col-3`}>
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
            </div>
        </div>
    );
};

export default AnalyzCard;
