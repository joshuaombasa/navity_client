import React from "react";
import { Outlet } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Footer from "./Footer";
import Header from "./Header";


export default function Layout() {
    return (
        <div className="layout-container">
            <Header />
            <div className="outlet-container">
                <div className="outlet-container">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}