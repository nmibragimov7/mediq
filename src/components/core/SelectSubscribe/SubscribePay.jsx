import React, {useState} from "react"

import BaseInput from "../../base/BaseInput/BaseInput"
import BaseButton from "../../base/BaseButton/BaseButton"
import BaseCheckbox from "../../base/BaseCheckbox/BaseCheckbox"

// Компонент оплаты подписки
const SubscribePay = ({subscribe}) => {
    const [form, setForm] = useState({
        name: "",
        card_number: "",
        cvc: "",
        isConfirm: true,
        secondName: ""
    })
    const onChange = (e) => {
        setForm(prev =>
            ({...prev, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value}))
    }
    return (
        <div className={"row"}>
            <div className="col-7">
                <BaseInput onChange={onChange} value={form.name} name={"name"} placeholder={"Имя Фамилия на карте"}/>
            </div>
            <div className="col-5">
                <BaseInput onChange={onChange} name={"card_number"} value={form.card_number} placeholder="Номер карты"
                           type={"number"}/>
            </div>
            <div className="col-4 mt-3">
                <BaseInput onChange={onChange} value={form.secondName} name={"secondName"}
                           placeholder={"Имя Фамилия на карте"}/>

            </div>
            <div className="col-3 mt-3">
                <BaseInput onChange={onChange} type={"number"} value={form.cvc} name={"cvc"} placeholder={"CVC"}/>
            </div>
            <div className="col-12 mt-3">
                <BaseCheckbox checked={form.isConfirm}
                              onChange={onChange}
                              name={"isConfirm"}
                              label={"Ознакомлен с Правилами пользования и Публичной офертой"}/>
            </div>
            <div className="col-12 mt-3 d-flex justify-content-center">
                <BaseButton disabled={!form.isConfirm} onClick={subscribe} width={35} classes={"py-4"}>
                    Оплатить (80 000 тг.)
                </BaseButton>
            </div>
        </div>
    );
};

export default SubscribePay;
