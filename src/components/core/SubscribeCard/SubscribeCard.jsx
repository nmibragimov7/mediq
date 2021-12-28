import React from "react";
import s from "./subscribe_card.module.scss";

const SubscribeCard = () => {
    return (
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
    );
};

export default SubscribeCard;
