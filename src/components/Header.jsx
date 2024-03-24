import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-container">
            <Link to='/' className="logo">navity</Link>
            <div className="nav-links">
                <NavLink to="about">About</NavLink>
                <NavLink to="vans">Vans</NavLink>
                <NavLink to="host">Host</NavLink>
                <NavLink to="login">Login</NavLink>
            </div>
        </div>
    )
}