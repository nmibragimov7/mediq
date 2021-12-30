import React from 'react'

import styles from "./banner.module.css"
import BaseButton from "../../base/BaseButton/BaseButton"

// Баннер
const Banner = () => {
    return (
        <div className={`d-flex justify-content-between align-items-center p-5 ${styles.banner}`}>
            <div>
                <h5 className={`${styles.title} my-2`}>Ибрай Жаксылыков</h5>
                <div>
                    <BaseButton classes={styles.subscribes_btn} type={'link'}>
                        Мои подписки
                    </BaseButton>
                </div>
            </div>
            <div className={styles.bannerCircle}>
                <img src="images/circle-progress.svg" alt=""/>
            </div>
        </div>
    );
};

export default Banner;
