import React from 'react'
import {Route, Routes, Navigate} from "react-router-dom"

import Subscribes from "../Subscribes/Subscribes"
import Records from "../Records/Records"
import Tracker from "../Tracker/Tracker"
import Profile from "../Profile/Profile"
import Analyzes from "../Analyzes/Analyzes"
import RecordDetail from "../RecordDetail/RecordDetail"
import SelectDoctor from "../SelectDoctor/SelectDoctor"
import NewRecord from "../NewRecord/NewRecord"
import Scheduler from "../Scheduler/Sheduler";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path={"/"} element={<Subscribes/>}/>
            <Route exact path={"/records"} element={<Records/>}/>
            <Route exact path={"/records/select-doctor"} element={<SelectDoctor/>}/>
            <Route exact path={"/records/new-record"} element={<NewRecord/>}/>
            <Route exact path={"/tracker"} element={<Tracker/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={"/profile/records/:id"} element={<RecordDetail/>}/>
            <Route exact path={"/analyzes"} element={<Analyzes/>}/>
            <Route exact path={"/scheduler"} element={<Scheduler/>}/>
            <Route path={"*"} element={<Navigate to={"/"}/>}/>
        </Routes>
    );
};

export default AppRoutes;
