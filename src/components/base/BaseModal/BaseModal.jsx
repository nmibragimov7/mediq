import React from 'react'

import s from "./styles.module.scss"

// Переиспользуемый UI компонент для модалки
const BaseModal = ({children, onClose, isShowed}) => {
    const cls = [s.modal]
    if (isShowed) {
        cls.push(s.modal__active)
    }
    return (
        <>
            <div onClick={onClose} className={cls.join(" ")}>
                <div className="h-100vh d-flex justify-content-center align-items-center">
                    <div onClick={e => e.stopPropagation()} className={`${s.modal__body} p-4`}>
                        {children}
                    </div>
                </div>
            </div>
            {isShowed && <div className={s.modal__bg} onClick={onClose}/>}
        </>
    );
};

export default BaseModal;
