import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm, applyFilters } from "../redux/productsSlice";
import "./Nav.css";

export default function Nav() {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // 🔍 عند الضغط على أيقونة البحث
    const handleSearchClick = () => {
        if (searchValue.trim() === "") {
            // رجوع للديفولت لما السيرش يبقى فاضي
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
                    <img src="/imgs/fav.png" alt="Favorites" className="nav-link-img" />
                    <img src="/imgs/cart.png" alt="Cart" className="nav-link-img" />
                </div>

                <div className="nav_account">
                    <img src="/imgs/account.png" alt="User" className="user-icon" />
                    <img src="/imgs/down-line.png" alt="Dropdown" className="arrow-icon" />
                </div>
            </div>
        </div>
    );
}
