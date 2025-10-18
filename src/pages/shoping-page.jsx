import React from "react";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import ShopProducts from "../components/shopping-page-components/Shop-products"
import FiltersSidebar from "../components/shopping-page-components/Filter"
import "./shopping.css"
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

const ShopingPage = () => {

    return (
        <div className="shoping-page-container">
            <FiltersSidebar />
            <ShopProducts />
        </div>
    );
};

export default ShopingPage;
