import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../public/about--page.png"

export default function SelectedVan() {

    const vanOption = { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" }


    return (
        <div className="selected-van">
            <Link>&larr; Back to all vans</Link>
            <img src={aboutImage} alt="" />
            <span>{vanOption.type}</span>
            <h3>{vanOption.name}</h3>
            <h3>${vanOption.price}/day</h3>
            <p>{vanOption.description}</p>
            <Link>Rent this van</Link>
        </div>
    )
}