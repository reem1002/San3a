import React from "react";
import "./Wid-card.css";
import { useState } from "react";
const ProductCard = ({ image, label, isFree, name, seller, price, rating }) => {
    const [favFlag, setFavFlag] = useState(true);
    const handleFavClick = () => {
        setFavFlag(!favFlag);
        // if (favFlag) {
        //     alert("تمت إضافته إلى المفضلة");
        // } else {
        //     alert("تمت إزالته من المفضلة");
        // }
    }
    return (
        <div className="card">
            {label && (
                <span className="product-label">
                    {label}
                </span>
            )}
            <div className="maindata">
                {favFlag ? (
                    <img src="/imgs/un-fav.png" alt="un-fav" className="fav-icon" onClick={handleFavClick} />
                ) : (
                    <img src="/imgs/fav-red.png" alt="fav" className="fav-icon" onClick={handleFavClick} />
                )}

                <img src={image} alt={name} className="product-image" />
                <div className="maininfo" >
                    <h3 className="product-title">{name}</h3>
                    <p className="product-seller">{seller}</p>
                </div>
            </div>
            <div className="sub-info">
                <div className="rating-box">
                    <span>{rating}</span>
                    <span>
                        <img src="/imgs/star.png" alt="star" className="w-4 h-4" />
                    </span>
                </div>
                <div className="price-box">
                    <p className="product-price">{price} جنيه</p>
                </div>
            </div>
            <button className="buy-button">
                <span>
                    <img src="/imgs/cart.png" alt="cart" className="w-4 h-4" />
                </span>
                <span>أضف لعربتك</span>
            </button>
        </div>
    );
};

export default ProductCard;
