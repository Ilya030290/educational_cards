import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "../pages/Pages";


export const Header: React.FC = () => {

    const getNavLinkStyle = (navLink: { isActive: boolean }) => {
        return navLink.isActive ? s.active_link : s.link;
    };

    return (
        <header>
            <div className={`${s.block} ${s.header}`}>
                <NavLink to={PATH.TEST} className={(navLink) => getNavLinkStyle(navLink)}>
                    Test
                </NavLink>
                <NavLink to={PATH.LOGIN} className={(navLink) => getNavLinkStyle(navLink)}>
                    Login
                </NavLink>
                <NavLink to={PATH.REGISTRATION} className={(navLink) => getNavLinkStyle(navLink)}>
                    Registration
                </NavLink>
                <NavLink to={PATH.PROFILE} className={(navLink) => getNavLinkStyle(navLink)}>
                    Profile
                </NavLink>
                <NavLink to={PATH.PASSWORD_RECOVERY} className={(navLink) => getNavLinkStyle(navLink)}>
                    Password Recovery
                </NavLink>
                <NavLink to={PATH.CREATE_NEW_PASSWORD} className={(navLink) => getNavLinkStyle(navLink)}>
                    Create New Password
                </NavLink>
            </div>
        </header>
    );
};
