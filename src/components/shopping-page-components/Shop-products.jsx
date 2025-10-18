import React from "react";
import "./shop.css";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import ProductCard from "../landing-page-components/Wid-Card"
import ResultsHeader from "./Result-header"

const products = [
    {
        image: "/imgs/place.png",
        label: "خصم",
        isFree: false,
        name: "شمعة عطرية بالفانيليا",
        seller: "عطور نور",
        price: 60,
        rating: 4.6,
    },
    {
        image: "/imgs/place.png",
        label: "",
        isFree: false,
        name: "سوار كروشيه يدوي",
        seller: "هاند كرافتس",
        price: 45,
        rating: 4.4,
    },
    {
        image: "/imgs/place.png",
        label: "خصم",
        isFree: false,
        name: "صابون زيت الزيتون الطبيعي",
        seller: "عناية طبيعية",
        price: 30,
        rating: 4.2,
    },
    {
        image: "/imgs/place.png",
        label: "",
        isFree: false,
        name: "ميدالية مفاتيح مطرزة",
        seller: "خيوط وألوان",
        price: 25,
        rating: 4.1,
    },
    {
        image: "/imgs/place.png",
        label: "شحن مجاني",
        isFree: true,
        name: "دفتر ملاحظات يدوي",
        seller: "صُنع بحب",
        price: 70,
        rating: 4.8,
    },
    {
        image: "/imgs/place.png",
        label: "",
        isFree: false,
        name: "قلادة حجر طبيعي",
        seller: "إبداع حجري",
        price: 55,
        rating: 4.5,
    },
];

const ShopProducts = () => {
    const handleAddToCart = (name) => {
        alert(`تمت إضافة "${name}" إلى عربيتك 🛒`);
    };

    return (
        <div className="shop-container">
            <ResultsHeader />
            <div className="products-grid">
                {products.map((product, index) => (
                    <div className="cards-display">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                label={product.label}
                                isFree={product.isFree}
                                name={product.name}
                                seller={product.seller}

                                price={product.price}
                                rating={product.rating}

                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopProducts;
