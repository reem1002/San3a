import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Wid-card.css";

const ProductCard = ({
    id,
    image,
    name,
    seller,
    price,
    rating,
    section,
    craft,
    discount,
    shipping,
    label,
}) => {
    const [favFlag, setFavFlag] = useState(false);
    const navigate = useNavigate();

    // 🔹 السعر بعد الخصم
    const finalPrice =
        discount && discount > 0 ? price - (price * discount) / 100 : price;

    // 🔹 الانتقال لصفحة المنتج
    const goToProduct = () => {
        navigate(`/product/${id}`);
    };

    // 🔹 المفضلة
    const handleFavClick = (e) => {
        e.stopPropagation();
        setFavFlag(!favFlag);
    };

    // 🔹 إضافة للعربة (تقدرِ تربطيه بريدوكس لاحقًا)
    const handleAddToCart = (e) => {
        e.stopPropagation();
        console.log(`✅ تمت إضافة ${name} إلى العربة`);
    };

    return (
        <div className="card">
            {/* الشارة */}
            {(discount > 0 || shipping === "مجاني" || label) && (
                <span
                    className={`product-label ${discount > 0
                        ? "discount"
                        : shipping === "مجاني"
                            ? "free"
                            : "custom"
                        }`}
                >
                    {discount > 0
                        ? `خصم ${discount}%`
                        : shipping === "مجاني"
                            ? "شحن مجاني"
                            : label}
                </span>
            )}

            <div className="maindata">
                {/* أيقونة المفضلة */}
                <img
                    src={favFlag ? "/imgs/fav-red.png" : "/imgs/un-fav.png"}
                    alt="fav"
                    className="fav-icon"
                    onClick={handleFavClick}
                />

                {/* صورة المنتج → تفتح صفحة التفاصيل */}
                <img
                    src={image}
                    alt={name}
                    className="product-image"
                    onClick={goToProduct}
                    style={{ cursor: "pointer" }}
                />

                {/* التفاصيل */}
                <div className="maininfo">
                    <h3
                        className="product-title"
                        onClick={goToProduct}
                        style={{ cursor: "pointer" }}
                    >
                        {name}
                    </h3>
                    <p className="product-seller">{seller}</p>

                    <div className="product-meta">
                        <p>
                            <strong>الحرفة:</strong> {craft}
                        </p>
                    </div>
                </div>
            </div>

            {/* السعر والتقييم */}
            <div className="sub-info">
                <div className="rating-box">
                    <span>{rating}</span>
                    <img src="/imgs/star.png" alt="star" className="w-4 h-4" />
                </div>
                <div className="price-box">
                    {discount > 0 ? (
                        <>
                            <p className="product-price discounted">{price} ج.م</p>
                            <p className="product-price final">{finalPrice} ج.م</p>
                        </>
                    ) : (
                        <p className="product-price">{price} ج.م</p>
                    )}
                </div>
            </div>

            {/* زر العربة */}
            <button className="buy-button" onClick={handleAddToCart}>
                <img src="/imgs/cart.png" alt="cart" className="w-4 h-4" />
                <span>أضف لعربتك</span>
            </button>
        </div>
    );
};

export default ProductCard;
