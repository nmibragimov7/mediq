import React from "react";
import styles from "./style.module.scss";
import BaseButton from "../../base/BaseButton/BaseButton";

const SubscribeDescription = ({onSelect}) => {
    return (
        <>
            <h3 className={styles.select__title}>
                Выберите пакет
            </h3>
            <div className="mt-4 flex-grow-1">
                <div className="row h-100">
                    <div className="col-6 h-100">
                        <div className={`${styles.select__col} h-100`}>
                            <div className={styles.select__col_img}>
                                <img src="images/base-sub-i.png" alt=""/>
                                <div className={styles.select__col_body}>
                                    <div className="p-4 h-100 d-flex flex-column justify-content-between">
                                        <h5 className={`${styles.select__col_title}`}>Базовая Подписка</h5>
                                        <p className={`${styles.select__blur_txt} d-flex align-items-center p-3`}>
                                            Learning how to create simple Swift applications in 8 lessons</p>
                                    </div>
                                </div>
                            </div>
                            <BaseButton onClick={onSelect} classes={"mt-3 py-4"}>Подписаться</BaseButton>
                        </div>
                    </div>
                    <div className="col-6 h-100">
                        <div onSelect={onSelect} className={`${styles.select__col} h-100`}>
                            <div className={styles.select__col_img}>
                                <img src="images/premium-i.png" alt=""/>
                                <div className={styles.select__col_body}>
                                    <div className={"p-4 h-100 d-flex flex-column justify-content-between"}>
                                        <h5 className={`${styles.select__col_title}`}>Премиум Подписка</h5>
                                        <p className={`${styles.select__blur_txt} d-flex align-items-center p-3`}>
                                            Best tips for drawing some good thematic illustration
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <BaseButton onClick={onSelect} classes={"mt-3 py-4"}>Подписаться</BaseButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscribeDescription;
