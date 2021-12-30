import React, {useState} from "react";
import Banner from "../../components/core/Banner/Banner";
import SelectSubscribe from "../../components/core/SelectSubscribe/SelectSubscribe";
import SubscribedPerson from "../../components/core/SubscribedPerson/SubscribedPerson";
import SubscribePay from "../../components/core/SelectSubscribe/SubscribePay";
import {toast} from 'react-toastify';

// Страница Подиски
const Subscribes = () => {
    const [isJoined, setIsJoined] = useState(false)
    const [activeStep, setActiveStep] = useState(0)
    const unSubscribe = () => {
        setActiveStep(0)
        setIsJoined(false)
        toast.info("Подписка успешно отменена!", {
            position: "top-center"
        })
    }
    const subscribe = () => {
        setIsJoined(true)
        toast.success("Подписка активирована 👌", {
            position: "top-center"
        })
    }
    if (isJoined) {
        // компонент для показа что пользователь подписан
        return <div className={"d-flex flex-column h-100"}>
            <SubscribedPerson unSubscribe={unSubscribe}/>
        </div>
    }
    return (
        <div className={"d-flex flex-column h-100"}>
            {
                activeStep === 0 && <>
                    <Banner/>
                    <div className={"mt-4 flex-grow-1"}>
                        <SelectSubscribe onSelect={() => setActiveStep(1)}/>
                    </div>
                </>
            }
            {
                activeStep === 1 && <SubscribePay subscribe={subscribe}/>
            }
        </div>
    );
};

export default Subscribes;
