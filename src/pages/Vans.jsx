import React from "react";

export default function Vans() {

    const vanOption = { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" }

    function generateSearchParams() {

    }

    const vansPageVanItem = () => {
        return (
            <>
        <div className="">
            <img src={vanOption.imageUrl} alt="" />
            <div className="van-info">
                <h3>{vanOption.name}</h3>
                <h3>${vanOption.price}/day</h3>
                <span>{vanOption.type}</span>
            </div>
        </div>
        <div className="">
            <img src={vanOption.imageUrl} alt="" />
            <div className="van-info">
                <h3>{vanOption.name}</h3>
                <h3>${vanOption.price}/day</h3>
                <span>{vanOption.type}</span>
            </div>
        </div>
        <div className="">
            <img src={vanOption.imageUrl} alt="" />
            <div className="van-info">
                <h3>{vanOption.name}</h3>
                <h3>${vanOption.price}/day</h3>
                <span>{vanOption.type}</span>
            </div>
        </div>
        <div className="">
            <img src={vanOption.imageUrl} alt="" />
            <div className="van-info">
                <h3>{vanOption.name}</h3>
                <h3>${vanOption.price}/day</h3>
                <span>{vanOption.type}</span>
            </div>
        </div>
        <div className="">
            <img src={vanOption.imageUrl} alt="" />
            <div className="van-info">
                <h3>{vanOption.name}</h3>
                <h3>${vanOption.price}/day</h3>
                <span>{vanOption.type}</span>
            </div>
        </div>
        <div className="">
            <img src={vanOption.imageUrl} alt="" />
            <div className="van-info">
                <h3>{vanOption.name}</h3>
                <h3>${vanOption.price}/day</h3>
                <span>{vanOption.type}</span>
            </div>
        </div>
        </>
        )
    }

    return (
        <div className="">
            <h1>Explore our van options.</h1>
            <div className="vans-page-nav">
                <button onClick={generateSearchParams}>Simple</button>
                <button onClick={generateSearchParams}>Luxury</button>
                <button onClick={generateSearchParams}>Rugged</button>
                <button onClick={generateSearchParams}>Clear filters</button>
            </div>
            {vansPageVanItem()}
        </div>
    )
}