import React from "react";
import VanItem from "../components/VanItem";

export default function Vans() {

    function generateSearchParams() {

    }



    return (
        <div className="vans-page">
            <div className="vans-page-container">
                <h1>Explore our van options.</h1>
                <div className="vans-page-nav">
                    <button onClick={generateSearchParams}>Simple</button>
                    <button onClick={generateSearchParams}>Luxury</button>
                    <button onClick={generateSearchParams}>Rugged</button>
                    <button onClick={generateSearchParams}>Clear filters</button>
                </div>
                <div className="van-elements">
                    <VanItem />
                    <VanItem />
                    <VanItem />
                    <VanItem />
                    <VanItem />
                    <VanItem />
                </div>
            </div>
        </div>
    )
}