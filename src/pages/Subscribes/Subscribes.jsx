import React, {useState} from 'react';
import Banner from "../../components/core/Banner/Banner";
import SelectSubscribe from "../../components/core/SelectSubscribe/SelectSubscribe";
import SubscribedPerson from "../../components/core/SubscribedPerson/SubscribedPerson";

const Subscribes = () => {
    const [isJoined, setIsJoined] = useState(false)
    return (
        <div className={"d-flex flex-column h-100"}>
            <Banner/>
            <div className={"mt-4 flex-grow-1"}>
                {isJoined ? <SubscribedPerson unSubscribe={setIsJoined.bind(null, false)}/> :
                    <SelectSubscribe onSelect={setIsJoined.bind(null, true)}/>}
            </div>
        </div>
    );
};

export default Subscribes;
