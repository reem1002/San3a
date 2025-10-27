import React from "react";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import ShopProducts from "../components/shopping-page-components/Shop-products"
import FiltersSidebar from "../components/shopping-page-components/Filter"
import "./shopping.css"
import { useEffect } from "react";

const ShopingPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        document.documentElement.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div className="shoping-page-container">
            <img src="/imgs/basket.png" alt="hero" className='basket-decor' />

            {/* <FiltersSidebar /> */}
            <ShopProducts />
        </div>
    );
};

export default ShopingPage;
