import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

import BaseButton from "../../components/base/BaseButton/BaseButton"
import BaseSelect from "../../components/base/BaseSelect/BaseSelect"

const Records = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        point: null,
        clinic: ""
    })
    const options = [{
            id: 1,
            value: "First Point"
        },
        {
            id: 2,
            value: "Second Point"
        },
        {
            id: 3,
            value: "Third Point"
        }, {
            id: 4,
            value: "Fourhth Point"
        }]
    const onChangeHandler = (id, name) => {
        setValues(prev => ({...prev, [name]: id}))
    }
    const routeHandler = () => {
        navigate("/records/select-doctor")
    }

    return (
        <div className={"h-100"}>
            <div className="row">
                <div className="col-6">
                    <BaseSelect name={"point"}
                                value={values.point}
                                onSelect={onChangeHandler} placeholder={"Выберите город"}
                                options={options} addClass={"mb-2"}/>
                    {
                        values.point && <BaseSelect name={"clinic"}
                                                    value={values.clinic}
                                                    onSelect={onChangeHandler} placeholder={"Выберите Клинику"}
                                                    options={options} addClass={"mb-2"}/>
                    }
                </div>
                <div className="col-6">
                    <div>
                        <img src="images/map.png" className={"w-100"} alt=""/>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center mt-3">
                    <BaseButton width={35} onClick={routeHandler}>Далее</BaseButton>
                </div>
            </div>
        </div>
    );
};

export default Records;
