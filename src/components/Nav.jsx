import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, applyFilters } from "../redux/productsSlice";
import { toggleFavorite } from "../redux/favoritesSlice";
import "./Nav.css";
import { Heart, Trash2, ShoppingCart, Search, Menu, X } from "lucide-react";

export default function Nav() {
    const [searchValue, setSearchValue] = useState("");
    const [showFavDropdown, setShowFavDropdown] = useState(false);
    const [showCartDropdown, setShowCartDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [circleOpen, setCircleOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const favorites = useSelector((state) => state.favorites.favorites);
    const cartItems = useSelector((state) => state.cart.cartItems);

    const favRef = useRef(null);


    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            dispatch(setSearchTerm(searchValue.trim()));
            dispatch(applyFilters());

            if (searchValue.trim() !== "" && location.pathname !== "/shop") {
                navigate("/shop");
            }
        }, 1000);

        return () => clearTimeout(delayDebounce);
    }, [searchValue, dispatch, navigate, location.pathname]);

    // ❤️ فتح وغلق المفضلة
    const toggleFavDropdown = () => setShowFavDropdown((prev) => !prev);

    // إغلاق المفضلة عند الضغط خارجها
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (favRef.current && !favRef.current.contains(event.target)) {
                setShowFavDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 🗑️ إزالة منتج من المفضلة
    const handleRemoveFavorite = (product, e) => {
        e.stopPropagation();
        dispatch(toggleFavorite(product));
    };

    // 🔗 الانتقال إلى صفحة المنتج
    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
        setShowFavDropdown(false);
        setShowCartDropdown(false);
    };

    // 🛒 الانتقال إلى سلة التسوق
    const goToCart = () => {
        navigate("/cart");
        setShowCartDropdown(false);
    };

    return (
        <>
            <div className="nav-bar shadow-sm">
                <div className="nav container">
                    {/* 🏠 اللوجو */}
                    <Link to="/">
                        <img src="/imgs/logo1.png" alt="Logo" className="logo" />
                    </Link>

                    {/* 🔗 روابط الـNavbar */}
                    <div className={`Navs_links ${menuOpen ? "open" : ""}`}>
                        <div className="links">
                            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
                                <img src="/imgs/home.png" alt="Home" title="Home" className="nav-icon" />
                            </Link>
                            <Link to="/shop" className="nav-link" onClick={() => setMenuOpen(false)}>
                                <img src="/imgs/shop.png" alt="Shop" title="Store" className="nav-icon" />
                            </Link>
                            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
                                <img src="/imgs/us.png" alt="About Us" title="About us" className="nav-icon" />
                            </Link>
                            <Link to="/faq" className="nav-link" onClick={() => setMenuOpen(false)}>
                                <img src="/imgs/qa.png" alt="Q&A" title="Q&A" className="nav-icon" />
                            </Link>
                        </div>

                        {/* 🔎 البحث */}
                        <div className="search">
                            <Search className="search-icon" size={22} strokeWidth={1.5} color="#000" />
                            <input
                                type="text"
                                placeholder="هل تبحث عن منتج معين؟"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* 👤 أيقونات المستخدم */}
                    <div className="nav_user">

                        {/* 🛒 العربة */}
                        <div
                            className="fav-icon-wrapper"
                            onMouseEnter={() => setShowCartDropdown(true)}
                            onMouseLeave={() => setShowCartDropdown(false)}
                        >
                            <ShoppingCart
                                className="fav-icon"
                                size={26}
                                strokeWidth={1.5}
                                color="#000"
                                onClick={goToCart}
                                style={{ cursor: "pointer" }}
                            />

                            {cartItems.length > 0 && <span className="fav-count">{cartItems.length}</span>}

                            {showCartDropdown && (
                                <div className="cart-dropdown">
                                    {cartItems.length === 0 ? (
                                        <p className="empty-fav">عربتك فارغة 🛒</p>
                                    ) : (
                                        <>
                                            {cartItems.slice(0, 3).map((item) => (
                                                <div key={item.id} className="fav-item" onClick={goToCart}>
                                                    <img src={item.image} alt={item.name} className="fav-thumb" />
                                                    <div className="fav-details">
                                                        <p className="fav-name">
                                                            {item.name.length > 23
                                                                ? item.name.slice(0, 20) + "..."
                                                                : item.name}
                                                        </p>
                                                        <span className="fav-price">
                                                            {item.price} ج.م × {item.quantity}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                            {cartItems.length > 3 && (
                                                <p className="fav-more">+ {cartItems.length - 3} منتج آخر</p>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                        {/* ❤️ المفضلة */}
                        <div ref={favRef} className="fav-icon-wrapper">
                            <Heart
                                className="fav-icon"
                                size={26}
                                strokeWidth={1.5}
                                color="#000"
                                onClick={toggleFavDropdown}
                            />
                            {favorites.length > 0 && <span className="fav-count">{favorites.length}</span>}

                            {showFavDropdown && (
                                <div className="fav-dropdown">
                                    {favorites.length === 0 ? (
                                        <p className="empty-fav">لا توجد منتجات مفضلة بعد ❤️</p>
                                    ) : (
                                        favorites.map((item) => (
                                            <div
                                                key={item.id}
                                                className="fav-item"
                                                onClick={() => handleProductClick(item.id)}
                                            >
                                                <img src={item.image} alt={item.name} className="fav-thumb" />
                                                <div className="fav-details">
                                                    <p className="fav-name">
                                                        {item.name.length > 23
                                                            ? item.name.slice(0, 20) + "..."
                                                            : item.name}
                                                    </p>
                                                    <span className="fav-price">{item.price} ج.م</span>
                                                </div>
                                                <Trash2
                                                    className="fav-delete"
                                                    size={20}
                                                    strokeWidth={1.5}
                                                    onClick={(e) => handleRemoveFavorite(item, e)}
                                                />
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}
                        </div>

                        {/* 📱 منيو الموبايل */}
                        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? (
                                <X size={26} strokeWidth={1.5} color="#000" />
                            ) : (
                                <Menu size={26} strokeWidth={1.5} color="#000" />
                            )}
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
