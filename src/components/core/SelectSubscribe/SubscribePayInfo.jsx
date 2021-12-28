import React from "react";
import SubscribeCard from "../SubscribeCard/SubscribeCard";
import BaseButton from "../../base/BaseButton/BaseButton";

const SubscribePayInfo = ({next}) => {
    return (
        <div>
            <SubscribeCard/>
            <div className={"mt-3 d-flex justify-content-center"}>
                <BaseButton onClick={next} width={35} classes={"py-4"}>Купить за 80 000 тг.</BaseButton>
            </div>
        </div>
    );
};

export default SubscribePayInfo;
