import React from "react";
import "./Pagination.css";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    const renderPages = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`page-btn ${currentPage === i ? "active" : ""}`}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="pagination-container">
            <button onClick={handlePrev} disabled={currentPage === 1} className="nav-btn">
                السابق
            </button>
            <div className="pages">{renderPages()}</div>
            <button onClick={handleNext} disabled={currentPage === totalPages} className="nav-btn">
                التالي
            </button>
        </div>
    );
};

export default PaginationComponent;
