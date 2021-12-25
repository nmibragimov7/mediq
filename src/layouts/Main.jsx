import React from "react";
import Sidebar from "../components/common/SIdebar/Sidebar";
import styles from "./Main.module.css"

const Layout = ({children}) => {
    return <div className={`container-fluid py-3 h-100vh ${styles.layout}`}>
        <div className="row h-100">
            <div className="col-3 pr-0">
                <Sidebar/>
            </div>
            <div className={`col-9 pl-0`}>
                <div className={`${styles.layout__pages} h-100 p-5`}>
                    {children}
                </div>
            </div>
        </div>
    </div>
}


export default Layout
