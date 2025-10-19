import React, { useState, useEffect } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductPage() {
    const { id } = useParams();
    const allProducts = useSelector((state) => state.products.allProducts);
    const product = allProducts.find((p) => p.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    const [fav, setFav] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) return <p className="not-found">المنتج غير موجود</p>;

    const finalPrice =
        product.discount > 0
            ? product.price - (product.price * product.discount) / 100
            : product.price;

    return (
        <div className="product-page">
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
                        />
                        <span className="stock-info">
                            {product.stock > 0
                                ? `المتوفر: ${product.stock} قطعة`
                                : "غير متوفر حالياً"}
                        </span>
                    </div>

                    <div className="buttons">
                        <button className="add-cart">
                            <img src="/imgs/cart.png" alt="cart" />
                            أضف لعربتك
                        </button>
                        <button
                            className={`fav-btn ${fav ? "active" : ""}`}
                            onClick={() => setFav(!fav)}
                        >
                            <img
                                src={fav ? "/imgs/fav-red.png" : "/imgs/un-fav.png"}
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
                <div className="info-box">
                    <div className="info-item">
                        <strong>العروض:</strong>
                        <span>
                            {product.discount > 0
                                ? `خصم ${product.discount}%`
                                : "لا يوجد خصم"}
                        </span>
                    </div>
                    <div className="info-item">
                        <strong>حالة المنتج:</strong>
                        <span>{product.status || "جاهز للشحن"}</span>
                    </div>
                    <div className="info-item">
                        <strong>التصنيف:</strong>
                        <span>{product.section}</span>
                    </div>
                    <div className="info-item">
                        <strong>النوع:</strong>
                        <span>{product.craft}</span>
                    </div>
                </div>

                {product.notes && (
                    <div className="notes-box">
                        <h4>📋 ملاحظات:</h4>
                        <p>{product.notes}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
