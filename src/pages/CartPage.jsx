import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import "./cart.css";
import { FaTrashAlt } from "react-icons/fa"; 

export default function CartPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

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
                    الإجمالي الكلي: <strong>{total} ج.م</strong>
                </p>
                <div className="cart-buttons">
                    <button
                        className="checkout-btn"
                        onClick={() => navigate("/checkout")}
                    >
                        متابعة الدفع
                    </button>
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
