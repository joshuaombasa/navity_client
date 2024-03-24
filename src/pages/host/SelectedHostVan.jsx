import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import aboutImage from "../../../public/about--page.png"

export default function SelectedHostVan() {
    
    const vanOption = { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" }

    return (
        <div className="">
            <div className="">
                <img src={aboutImage} alt="" />
                <div className="selected-host-van-info">
                    <span>{vanOption.type}</span>
                    <h3>{vanOption.name}</h3>
                    <h3>${vanOption.price}/day</h3>
                </div>
            </div>
            <div className="selected-host-van-nav">
                <NavLink to="details">Details</NavLink>
                <NavLink to="pricing">Pricing</NavLink>
                <NavLink to="photos">Photos</NavLink>
            </div>
            <Outlet/>
        </div>
    )
}