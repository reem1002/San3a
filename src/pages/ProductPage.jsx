import React, { useState, useEffect } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";
import { addToCart, updateQuantity } from "../redux/cartSlice";

export default function ProductPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const allProducts = useSelector((state) => state.products.allProducts);
    const favorites = useSelector((state) => state.favorites.favorites);
    const cartItems = useSelector((state) => state.cart.cartItems);

    const product = allProducts.find((p) => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) return <p className="not-found">المنتج غير موجود</p>;

    const finalPrice =
        product.discount > 0
            ? product.price - (product.price * product.discount) / 100
            : product.price;

    const isFav = favorites.some((item) => item.id === product.id);
    const itemInCart = cartItems.find((item) => item.id === product.id);

    const handleAddToCart = () => {
        if (product.stock === 0) return;

        // لو المنتج موجود بالفعل في العربة
        if (itemInCart) {
            dispatch(
                updateQuantity({
                    id: product.id,
                    quantity: itemInCart.quantity + Number(quantity),
                })
            );
        } else {
            dispatch(addToCart({ ...product, quantity: Number(quantity) }));
        }

        // Reset الكمية
        setQuantity(1);
    };

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(product));
    };

    return (
        <div className="product-page">
            <img src="/imgs/macas.png" alt="hero" className='macas-decor' />
            <img src="/imgs/needle.png" alt="hero" className='needle-decor' />
            <div className="top-section">
                {/* الصور */}
                <div className="product-images">
                    <img src={product.image} alt={product.name} className="main-image" />
                    <div className="thumbnails">
                        <img src={product.image} alt="thumb1" />
                        <img src={product.image} alt="thumb2" />
                        <img src={product.image} alt="thumb3" />
                    </div>
                </div>

                {/* معلومات المنتج */}
                <div className="product-info">
                    <h2 className="product-title">{product.name}</h2>
                    <p className="product-desc">{product.description}</p>

                    <div className="rating-price">
                        <div className="rating">
                            <span>{product.rating}</span>
                            <img src="/imgs/star.png" alt="rating" />
                        </div>
                        <div className="price">
                            {product.discount > 0 ? (
                                <>
                                    <span className="old">{product.price} ج.م</span>
                                    <span className="new">{finalPrice} ج.م</span>
                                </>
                            ) : (
                                <span className="new">{product.price} ج.م</span>
                            )}
                        </div>
                    </div>

                    <p className="seller">
                        البائع: <strong>{product.seller}</strong>
                    </p>

                    <div className="quantity">
                        <span>الكمية المطلوبة:</span>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            min={1}
                            max={product.stock}
                            disabled={product.stock === 0}
                        />
                        <span className="stock-info">
                            {product.stock > 0
                                ? `المتوفر: ${product.stock} قطعة`
                                : "غير متوفر حالياً"}
                        </span>
                    </div>

                    <div className="buttons">
                        <button
                            className={`add-cart ${product.stock === 0 ? "disabled" : ""}`}
                            onClick={handleAddToCart}
                            disabled={product.stock === 0}
                        >
                            {product.stock === 0 ? "نفد المخزون" : "أضف لعربتك"}
                            <img src="/imgs/cart.png" alt="cart" className="w-4 h-4" />
                        </button>

                        <button
                            className={`fav-btn ${isFav ? "active" : ""}`}
                            onClick={handleToggleFavorite}
                        >
                            <img
                                src={isFav ? "/imgs/fav-red.png" : "/imgs/un-fav.png"}
                                alt="fav"
                            />
                        </button>
                    </div>

                    <p className="shipping-note">
                        {product.shipping === "مجاني"
                            ? "🟢 شحن مجاني متاح لهذا المنتج"
                            : `🚚 مصاريف الشحن: ${product.shippingCost || "60"} ج.م`}
                    </p>
                </div>
            </div>

            {/* تفاصيل إضافية */}
            <div className="details-section">
                <h3>معلومات إضافية</h3>
                <hr />
                <div className="info-box">
                    <div className="info-item">
                        <span className="key">العروض:</span>
                        <span>
                            {product.discount > 0
                                ? `خصم ${product.discount}%`
                                : "لا يوجد خصم"}
                        </span>
                    </div>
                    <div className="info-item">
                        <span className="key">حالة المنتج:</span>
                        <span>{product.status || "جاهز للشحن"}</span>
                    </div>
                    <div className="info-item">
                        <span className="key">التصنيف:</span>
                        <span>{product.section}</span>
                    </div>
                    <div className="info-item">
                        <span className="key">الحرفة:</span>
                        <span>{product.craft}</span>
                    </div>
                </div>

                {product.notes && (
                    <div className="notes-box">
                        <h3>ملاحظات:</h3>
                        <p>{product.notes}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
