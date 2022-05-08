import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {Login} from "./Login/Login";
import {Registration} from "./Registration/Regisration";
import {Profile} from "./Profile/Profile";
import {Test} from "./Test/Test";
import {PasswordRecovery} from "./PasswordRecovery/PasswordRecovery";
import {CreateNewPassword} from "./CreateNewPassword/CreateNewPassword";
import {Error404} from "./Error404/Error404";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    TEST: '/test',
    PASSWORD_RECOVERY: '/password-recovery',
    CREATE_NEW_PASSWORD: '/create-new-password'
};

export const Pages: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Navigate to={PATH.LOGIN}/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.CREATE_NEW_PASSWORD} element={<CreateNewPassword/>}/>
                <Route path={"/*"} element={<Error404/>}/>
            </Routes>
        </div>
    );
};
