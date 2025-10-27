import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="notfound-container">
            <div className="cat-wrapper">
                <img
                    src="/imgs/monkey.gif"
                    alt="Not Found Cat"
                    className="cat-img"
                />
            </div>
            <h2 className="notfound-title">الصفحة غير موجودة</h2>
            <p className="notfound-text">يبدو أنك ضللت الطريق... عُد إلى المنزل بأمان!</p>
            <Link to="/" className="back-home-btn">
                العودة إلى الصفحة الرئيسية
            </Link>
        </div>
    );
}
