import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, applyFilters } from "../redux/productsSlice";
import { toggleFavorite } from "../redux/favoritesSlice";
import "./Nav.css";
import { HelpCircle } from "lucide-react";

import {
    Heart,
    Trash2,
    ShoppingCart,
    Home,
    Store,
    Users,
    Search,
    Menu,
    X,
} from "lucide-react";

export default function Nav() {
    const [searchValue, setSearchValue] = useState("");
    const [showFavDropdown, setShowFavDropdown] = useState(false);
    const [showCartDropdown, setShowCartDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const favorites = useSelector((state) => state.favorites.favorites);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const favRef = useRef(null);

    const handleSearchClick = () => {
        if (searchValue.trim() === "") {
            dispatch(setSearchTerm(""));
            dispatch(applyFilters());
        } else {
            dispatch(setSearchTerm(searchValue));
            dispatch(applyFilters());
            if (location.pathname !== "/shop") navigate("/shop");
        }
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchValue.trim() === "") {
                dispatch(setSearchTerm(""));
                dispatch(applyFilters());
            } else {
                dispatch(setSearchTerm(searchValue));
                dispatch(applyFilters());
                if (location.pathname !== "/shop") navigate("/shop");
            }
        }, 1000);
        return () => clearTimeout(delayDebounce);
    }, [searchValue, dispatch, navigate, location.pathname]);

    const toggleFavDropdown = () => {
        setShowFavDropdown((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (favRef.current && !favRef.current.contains(event.target)) {
                setShowFavDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleRemoveFavorite = (product, e) => {
        e.stopPropagation();
        dispatch(toggleFavorite(product));
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
        setShowFavDropdown(false);
        setShowCartDropdown(false);
    };

    const goToCart = () => {
        navigate("/cart");
        setShowCartDropdown(false);
    };

    return (
        <div className="nav-bar shadow-sm">
            <div className="nav container">
                <Link to="/">
                    <img src="/imgs/logo.png" alt="Logo" className="logo" />
                </Link>

                <div className={`Navs_links ${menuOpen ? "open" : ""}`}>
                    <div className="links">
                        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
                            <Home size={26} strokeWidth={1.5} color="#000" />
                        </Link>

                        <Link to="/shop" className="nav-link" onClick={() => setMenuOpen(false)}>
                            <Store size={26} strokeWidth={1.5} color="#000" />
                        </Link>

                        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
                            <Users size={26} strokeWidth={1.5} color="#000" />
                        </Link>

                        {/* 🆕 FAQ */}
                        <Link to="/faq" className="nav-link" onClick={() => setMenuOpen(false)}>
                            <HelpCircle size={26} strokeWidth={1.5} color="#000" />
                        </Link>
                    </div>

                    <div className="search">
                        <Search
                            className="search-icon"
                            size={22}
                            strokeWidth={1.5}
                            color="#000"
                            onClick={handleSearchClick}
                        />
                        <input
                            type="text"
                            placeholder="هل تبحث عن منتج معين؟"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>
                </div>

                <div className="nav_user">
                    {/* ❤️ المفضلة */}
                    <div ref={favRef} className="fav-icon-wrapper">
                        <Heart
                            className="fav-icon"
                            size={26}
                            strokeWidth={1.5}
                            color="#000"
                            onClick={toggleFavDropdown}
                        />
                        {favorites.length > 0 && (
                            <span className="fav-count">{favorites.length}</span>
                        )}

                        {showFavDropdown && (
                            <div className="fav-dropdown">
                                {favorites.length === 0 ? (
                                    <p className="empty-fav">لا توجد منتجات مفضلة بعد ❤️</p>
                                ) : (
                                    favorites.map((item) => (
                                        <div key={item.id} className="fav-item">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="fav-thumb"
                                                onClick={() => handleProductClick(item.id)}
                                            />
                                            <div className="fav-details">
                                                <p
                                                    className="fav-name"
                                                    onClick={() => handleProductClick(item.id)}
                                                >
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

                    {/* 🛒 العربة */}
                    <div
                        className="fav-icon-wrapper"
                        onMouseEnter={() => setShowCartDropdown(true)}
                        onMouseLeave={() => setShowCartDropdown(false)}
                        onClick={goToCart}
                    >
                        <ShoppingCart
                            className="fav-icon"
                            size={26}
                            strokeWidth={1.5}
                            color="#000"
                        />
                        {cartItems.length > 0 && (
                            <span className="fav-count">{cartItems.length}</span>
                        )}

                        {showCartDropdown && (
                            <div className="fav-dropdown">
                                {cartItems.length === 0 ? (
                                    <p className="empty-fav">عربتك فارغة 🛒</p>
                                ) : (
                                    <>
                                        {cartItems.slice(0, 3).map((item) => (
                                            <div key={item.id} className="fav-item">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="fav-thumb"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleProductClick(item.id);
                                                    }}
                                                />
                                                <div className="fav-details">
                                                    <p
                                                        className="fav-name"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleProductClick(item.id);
                                                        }}
                                                    >
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
                                            <p className="fav-more">
                                                + {cartItems.length - 3} منتج آخر
                                            </p>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    {/* القائمة الجانبية */}
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
    );
}
