import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCard from "./Wid-Card";
import "./New-arrive.css";

const NewArrive = () => {
    const navigate = useNavigate();

    const allProducts = useSelector((state) => state.products.allProducts);


    const products = allProducts.slice(0, 6);
    const handleMoreClick = () => {
        navigate("/shop");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    };

    return (
        <div className="container section-container  new-sec-con">
            <div className="section-card-container">
                <div className="flex items-center justify-between mb-6 upperbox">
                    <h2 className="section-title">وصلت حديثًا</h2>
                </div>

                <div className="cards-display">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>

            <div className="sectionfooter" onClick={handleMoreClick}>
                <span className="more-link">&lt;&lt; المزيد</span>
            </div>
        </div>
    );
};

export default NewArrive;
