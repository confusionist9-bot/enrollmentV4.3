import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBtn from '../modules/NavLink.module.css'

function NavLinkBtn() {
    return (
        <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? `${NavBtn.link} ${NavBtn.active}` : NavBtn.link}><i className="fa-solid fa-gauge-high"></i> Dashboard </NavLink></li>
        <li><NavLink to="/students" className={({ isActive }) => isActive ? `${NavBtn.link} ${NavBtn.active}` : NavBtn.link}><i className="fa-solid fa-user"></i> Student List </NavLink></li>
        <li><NavLink to="/curriculum" className={({ isActive }) => isActive ? `${NavBtn.link} ${NavBtn.active}` : NavBtn.link}><i className="fa-solid fa-clipboard-list"></i> Curriculum </NavLink></li>
        <li><NavLink to="/section" className={({ isActive }) => isActive ? `${NavBtn.link} ${NavBtn.active}` : NavBtn.link}><i className="fa-solid fa-users-between-lines"></i> Section </NavLink></li>
        </>
    )
}

export default NavLinkBtn