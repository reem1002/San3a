import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/landing-page-components/Wid-Card";

export default function Favorites() {
    const favorites = useSelector((state) => state.favorites.favorites);

    return (
        <div className="favorites-page container">
            <h3>قائمة المفضلة</h3>
            {favorites.length === 0 ? (
                <p>لم تضف أي منتجات بعد!</p>
            ) : (
                <div className="favorites-grid">
                    {favorites.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            )}
        </div>
    );
}
