import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favoritesSlice";
import "./Wid-card.css";
import { addToCart } from "../../redux/cartSlice";


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
    stock = 0,
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const favorites = useSelector((state) => state.favorites.favorites);
    const isFavorite = favorites.some((item) => item.id === id);

    const finalPrice =
        discount && discount > 0 ? price - (price * discount) / 100 : price;

    const goToProduct = () => {
        navigate(`/product/${id}`);
    };


    const handleFavClick = (e) => {
        e.stopPropagation();
        dispatch(toggleFavorite({ id, name, image, price, seller, craft }));
    };


    const handleAddToCart = (e) => {
        e.stopPropagation();
        if (stock <= 0) return;
        dispatch(
            addToCart({
                id,
                name,
                image,
                price: finalPrice,
                seller,
                craft,
                stock,
            })
        );
    };

    return (
        <div className={`card ${stock <= 0 ? "out-of-stock-card" : ""}`}>
            {/* الشارة */}
            {(discount > 0 || shipping === "مجاني" || label || stock <= 0) && (
                <span
                    className={`product-label ${stock <= 0
                        ? "out-of-stock"
                        : discount > 0
                            ? "discount"
                            : shipping === "مجاني"
                                ? "free"
                                : "custom"
                        }`}
                >
                    {stock <= 0
                        ? "نفد المخزون"
                        : discount > 0
                            ? `خصم ${discount}%`
                            : shipping === "مجاني"
                                ? "شحن مجاني"
                                : label}
                </span>
            )}

            <div className="maindata">
                <button
                    className={`fav-btn ${isFavorite ? "active" : ""}`}
                    onClick={handleFavClick}
                >
                    <img
                        src={isFavorite ? "/imgs/fav-red.png" : "/imgs/un-fav.png"}
                        alt="fav"
                    />
                </button>

                {/* صورة المنتج */}
                <div
                    className="image-wrapper"
                    onClick={goToProduct}
                    style={{ cursor: "pointer" }}
                >
                    <img
                        src={image}
                        alt={name}
                        className={`product-image ${stock <= 0 ? "grayscale" : ""}`}
                    />
                    {stock <= 0 && (
                        <div className="overlay">
                            <span>غير متوفر حالياً</span>
                        </div>
                    )}
                </div>

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
            <button
                className={`buy-button ${stock <= 0 ? "disabled" : ""}`}
                onClick={handleAddToCart}
                disabled={stock <= 0}
            >
                <img src="/imgs/cart.png" alt="cart" className="w-4 h-4" />
                <span>{stock > 0 ? "أضف لعربتك" : "غير متوفر"}</span>
            </button>
        </div>
    );
};

export default ProductCard;

