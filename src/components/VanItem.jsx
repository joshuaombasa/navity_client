import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../public/about--page.png"

export default function VanItem() {
    const vanOption = { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" }

    return (
        <Link to={vanOption.id} className="van-item">
            <img src={aboutImage} alt="" />
            <div className="van-item-info">
                <h3>{vanOption.name}</h3>
                <h3>${vanOption.price}/day</h3>
                <span>{vanOption.type}</span>
            </div>
        </Link>
    )
}