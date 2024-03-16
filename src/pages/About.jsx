import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../public/about--page.png"

export default function About() {
    return (
        <div className="about-page">
            <div className="image-container">
                <img src={aboutImage} alt="" />
            </div>
            <div className="about-page-container">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <div className="mission-info">
                    <p>Our mission is to enliven your road trip with the perfect travel van rental.</p>
                    <p>Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className="about-cta">
                    <h3>Your destination is waiting.</h3>
                    <h3>Your van is ready.</h3>
                    <Link to="/vans">Explore our vans</Link>
                </div>
            </div>
        </div>
    )
}