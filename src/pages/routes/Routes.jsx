import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Subscribes from "../Subscribes/Subscribes";
import Records from "../Records/Records";
import Tracker from "../Tracker/Tracker";
import Profile from "../Profile/Profile";
import Analyzes from "../Analyzes/Analyzes";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path={"/"} element={<Subscribes/>}/>
            <Route exact path={"/records"} element={<Records/>}/>
            <Route exact path={"/tracker"} element={<Tracker/>}/>
            <Route exact path={"/profile"} element={<Profile/>}/>
            <Route exact path={"/analyzes"} element={<Analyzes/>}/>
            <Route path={"*"} element={<Navigate to={"/"}/>}/>
        </Routes>
    );
};

export default AppRoutes;
