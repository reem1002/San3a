import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./circleNav.css"; 

export default function CircleNav() {
    const [circleOpen, setCircleOpen] = useState(false);
    const [linksEnabled, setLinksEnabled] = useState(false);

    useEffect(() => {
        let enableTimeout;

        if (circleOpen) {
            enableTimeout = setTimeout(() => {
                setLinksEnabled(true);
            }, 300);
        } else {
            setLinksEnabled(false);
        }

        return () => clearTimeout(enableTimeout);
    }, [circleOpen]);

    return (
        <div
            className={`circle-nav-container ${circleOpen ? "open" : ""}`}
            onMouseEnter={() => setCircleOpen(true)} 
            onMouseLeave={() => setCircleOpen(false)} 
        >
            <div
                className="circle-btn"
                onClick={(e) => {
                    e.stopPropagation();
                    setCircleOpen(!circleOpen);
                }}
            >
                <span className="circle-arrow">❯</span>
            </div>

            <div className="circle-links">
                <Link to="/" className="circle-link" style={{ pointerEvents: linksEnabled ? "auto" : "none" }}>
                    <img src="/imgs/home.png" alt="Home" title="Home" className="nav-icon" />
                </Link>
                <Link to="/shop" className="circle-link" style={{ pointerEvents: linksEnabled ? "auto" : "none" }}>
                    <img src="/imgs/shop.png" alt="Shop" title="Shop" className="nav-icon" />
                </Link>
                <Link to="/about" className="circle-link" style={{ pointerEvents: linksEnabled ? "auto" : "none" }}>
                    <img src="/imgs/us.png" alt="About" title="About us" className="nav-icon" />
                </Link>
                <Link to="/faq" className="circle-link" style={{ pointerEvents: linksEnabled ? "auto" : "none" }}>
                    <img src="/imgs/qa.png" alt="Q&A" title="Q&A" className="nav-icon" />
                </Link>
            </div>
        </div>

    );
}
