import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, applyFilters } from "../redux/productsSlice";
import { toggleFavorite } from "../redux/favoritesSlice";
import "./Nav.css";
import { FaRegHeart, FaTrashAlt, FaOpencart } from "react-icons/fa";

export default function Nav() {
    const [searchValue, setSearchValue] = useState("");
    const [showFavDropdown, setShowFavDropdown] = useState(false);
    const [showCartDropdown, setShowCartDropdown] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const favorites = useSelector((state) => state.favorites.favorites);
    const cartItems = useSelector((state) => state.cart.cartItems);

    const favRef = useRef(null);

    // 🔹 البحث
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

    // 🔹 المفضلة toggle + إغلاق عند الضغط خارجها
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
                <img src="/imgs/logo.png" alt="Logo" className="logo" />

                <div className="Navs_links">
                    <Link to="/" className="nav-link">
                        <img src="/imgs/home-icon.png" alt="Home" className="nav-link-img" />
                    </Link>
                    <Link to="/shop" className="nav-link">
                        <img src="/imgs/shop icon.png" alt="Shop" className="nav-link-img" />
                    </Link>
                    <Link to="/learn" className="nav-link">
                        <img src="/imgs/learn-icon.png" alt="Learn" className="nav-link-img" />
                    </Link>
                </div>

                <div className="search">
                    <img
                        src="/imgs/search.png"
                        alt="Search"
                        className="search-icon"
                        onClick={handleSearchClick}
                    />
                    <input
                        type="text"
                        placeholder="هل تبحث عن منتج معين؟"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>

                <div className="nav_user">
                    <img src="/imgs/notification.png" alt="Notifications" className="nav-link-img" />

                    {/* ❤️ المفضلة */}
                    <div ref={favRef} className="fav-icon-wrapper">
                        <FaRegHeart
                            className="fav-icon"
                            size={26}
                            color="#333"
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
                                            <FaTrashAlt
                                                className="fav-delete"
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
                        <FaOpencart className="fav-icon" size={25} color="#333" />
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
                </div>

                <div className="nav_account">
                    <img src="/imgs/account.png" alt="User" className="user-icon" />
                    <img src="/imgs/down-line.png" alt="Dropdown" className="arrow-icon" />
                </div>
            </div>
        </div>
    );
}
