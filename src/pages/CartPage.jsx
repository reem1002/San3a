import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import "./cart.css";
import { FaTrashAlt } from "react-icons/fa";

export default function CartPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const handleQuantityChange = (id, value) => {
        const qty = parseInt(value);
        if (qty > 0) {
            dispatch(updateQuantity({ id, quantity: qty }));
        }
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const shippingCost = 60;

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const totalWithShipping = total + shippingCost;

    const handleCheckout = () => {
        let message = "*طلب جديد من منصة صنعة:*\n\n";

        cartItems.forEach((item, index) => {
            message += `*${index + 1}. ${item.name}* (كود المنتج: ${item.id})\n`;
            message += `الكمية: ${item.quantity}\n`;
            message += `السعر: ${item.price} × ${item.quantity} = *${item.price * item.quantity} ج.م*\n\n`;
        });

        message += `*مصاريف الشحن:* ${shippingCost} ج.م\n`;
        message += `*الإجمالي الكلي:* ${totalWithShipping} ج.م\n\n`;
        message += "*من فضلك قم بكتابة بيانات التوصيل (الاسم - العنوان - رقم الموبايل).*";

        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "201004204036";

        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h3> السلة فارغة🛍️ </h3>
                <Link to="/shop" className="continue-btn">
                    تابع التسوق
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h3> سلة المشتريات</h3>
            <table className="cart-table ">
                <thead>
                    <tr>
                        <th>المنتج</th>
                        <th>المتجر</th>
                        <th>السعر</th>
                        <th>الكمية</th>
                        <th>المجموع</th>
                        <th>إزالة</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <Link to={`/product/${item.id}`} className="product-link">
                                    {item.name}
                                </Link>
                            </td>
                            <td>{item.seller}</td>
                            <td>{item.price} ج.م</td>
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleQuantityChange(item.id, e.target.value)
                                    }
                                    className="quentity"
                                />
                            </td>
                            <td>{item.price * item.quantity} ج.م</td>
                            <td>
                                <button
                                    className="delete-btn"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    <FaTrashAlt className="fav-delete" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="cart-footer">
                <p>
                    الإجمالي الكلي: <strong>{totalWithShipping} ج.م</strong> {" "}
                    (يشمل 60 ج.م مصاريف الشحن)
                </p>
                <div className="cart-buttons">
                    <div className="pay-proceed">
                        <button
                            className="checkout-btn"
                            onClick={handleCheckout}
                        >
                            متابعة الدفع
                        </button>
                        <p className="whatsapp-info">
                            سيتم تحويلك إلى واتساب لإرسال طلبك، وستظهر الرسالة بشكل منسق.
                        </p>
                    </div>
                    <button
                        className="clear-btn"
                        onClick={() => dispatch(clearCart())}
                    >
                        تفريغ السلة
                    </button>
                </div>
            </div>
        </div>
    );
}
