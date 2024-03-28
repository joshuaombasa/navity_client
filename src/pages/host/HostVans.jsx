import React from "react";
import aboutImage from "../../../public/about--page.png"
import { Link } from "react-router-dom";

export default function HostVans() {
    const vanOption = { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" }


    return (
        <div className="host-vans-page">
            <div className="host-vans-container">
                <h1>Your listed vans</h1>
                <div className="host-vans-items">
                    <Link to={vanOption.id} className="van-item">
                        <img src={aboutImage} alt="" />
                        <div className="host-van-item-info">
                            <h3>{vanOption.name}</h3>
                            <h4>${vanOption.price}/day</h4>
                        </div>
                    </Link>
                    <Link to={vanOption.id} className="van-item">
                        <img src={aboutImage} alt="" />
                        <div className="host-van-item-info">
                            <h3>{vanOption.name}</h3>
                            <h4>${vanOption.price}/day</h4>
                        </div>
                    </Link>
                    <Link to={vanOption.id} className="van-item">
                        <img src={aboutImage} alt="" />
                        <div className="host-van-item-info">
                            <h3>{vanOption.name}</h3>
                            <h4>${vanOption.price}/day</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}