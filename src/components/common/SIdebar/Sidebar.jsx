import React from 'react'
import {NavLink} from "react-router-dom"

import {menus} from "../../../fixtures/sidebar"
import styles from "./siderbar.module.css"

const Sidebar = () => {
    const isActiveLink = ({isActive}) => {
        let classes = `${styles.menu__link} `
        if (isActive) {
            classes += styles.activeLink
        }
        return classes
    }
    return (
        <div className={"d-flex flex-column h-100 py-5"}>
            <div className={`${styles.sidebar__logoWrap} pl-4`}>
                <img src="/images/logo.svg" alt=""/>
            </div>
            <div className={`${styles.menu} d-flex flex-column`}>
                {menus.map(el => {
                    return (
                        <NavLink key={el.path}
                                 to={el.path}
                                 className={isActiveLink}>
                            <div className="py-3 pl-5 d-inline-flex align-items-center">
                                <span className={styles.menu__link__img}>
                                <img src={el.icon} alt=""/>
                                </span>
                                    <span className={"ml-5"}>
                                    {el.name}
                                </span>
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    );
};

export default Sidebar;
