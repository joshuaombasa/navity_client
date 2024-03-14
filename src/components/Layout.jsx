import React from "react";
import About from "../pages/About";
import Home from "../pages/Home";
import Footer from "./Footer";
import Header from "./Header";


export default function Layout() {
    return (
        <div className="layout-container">
            <Header />
            <div className="outlet-container">
                <About/>
            </div>
            <Footer />
        </div>
    )
}