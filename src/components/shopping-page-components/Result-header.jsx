import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortType, applyFilters } from "../../redux/productsSlice";
import { FaFilter } from "react-icons/fa";
import "./result.css";

const ResultsHeader = ({ totalResults, isSidebarVisible, setIsSidebarVisible }) => {
    const dispatch = useDispatch();
    const sortType = useSelector((state) => state.products.sortType);

    const handleSortChange = (e) => {
        dispatch(setSortType(e.target.value));
    };

    useEffect(() => {
        dispatch(applyFilters());

    }, [sortType, dispatch]);

    return (
        <div className="results-header">
            <div className="togle">
                <FaFilter
                    className={`filter-toggle ${isSidebarVisible ? "active" : ""}`}
                    onClick={() => setIsSidebarVisible(!isSidebarVisible)}
                    title={isSidebarVisible ? "إخفاء الفلاتر" : "إظهار الفلاتر"}
                />
            </div>
            <div className="heading">

                لقد وجدنا <div className="totalResults">{totalResults}</div> منتج مطابق لبحثك
            </div>

            <div className="sort-section">
                <select value={sortType} onChange={handleSortChange}>
                    <option value="">مرتبة بحسب</option>
                    <option value="newest">الأحدث</option>
                    <option value="low-to-high">السعر من الأقل للأعلى</option>
                    <option value="high-to-low">السعر من الأعلى للأقل</option>
                </select>
            </div>
        </div>
    );
};

export default ResultsHeader;
