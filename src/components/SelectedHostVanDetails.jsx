import React from "react";


export default function SelectedHostVanDetails() {
    const vanOption = { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" }
    return (
        <div className="selected-host-details">
            <p><strong>Name:</strong> {vanOption.name}</p>
            <p><strong>Category:</strong> {vanOption.type}</p>
            <p><strong>Description:</strong> {vanOption.description}</p>
            <p><strong>Visibility:</strong> available</p>
        </div>
    )
}