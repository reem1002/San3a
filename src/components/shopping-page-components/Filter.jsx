import React, { useEffect } from "react";
import { FaRedoAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
    setFilters,
    resetFilters,
    applyFilters,
} from "../../redux/productsSlice.js";
import "./filter.css";

const FiltersSidebar = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.products.filters);

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        dispatch(setFilters({ [name]: newValue }));
    };

    useEffect(() => {
        dispatch(applyFilters());
    }, [filters, dispatch]);

    return (
        <aside className="filters-sidebar">
            {/* العنوان */}
            <div className="filters-header">
                <FaRedoAlt
                    className="reload-icon"
                    onClick={() => {
                        dispatch(resetFilters());
                        dispatch(applyFilters());
                    }}
                    title="إعادة التعيين"
                />
                <span>فلاتر البحث</span>
            </div>
            <div className="divider"></div>
            {/* الحرف */}
            <div className="filter-group1">
                <label className="filter-label">الحرف</label>
                <select
                    className="filter-select"
                    name="craftType"
                    value={filters.craftType}
                    onChange={handleFilterChange}
                >
                    <option>كل الحرف</option>
                    <option>شموع</option>
                    <option>كروشيه</option>
                    <option>صابون طبيعي</option>
                    <option>تطريز</option>
                    <option>خشب</option>
                    <option>حجارة</option>
                </select>
            </div>


            <div className="filter-group1">
                <label className="filter-label">الأقسام</label>
                <select
                    className="filter-select"
                    name="section"
                    value={filters.section}
                    onChange={handleFilterChange}
                >
                    <option>كل الأقسام</option>
                    <option>الديكور</option>
                    <option>الإكسسوارات</option>
                    <option>العناية</option>
                    <option>الهدايا</option>
                    <option>القرطاسية</option>
                </select>
            </div>

            {/* السعر */}
            <div className="filter-group1">
                <label className="filter-label">السعر</label>
                <div className="price-inputs">
                    <span>من</span>
                    <input
                        type="number"
                        name="minPrice"
                        value={filters.minPrice}
                        onChange={handleFilterChange}
                    />
                    <span>إلى</span>
                    <input
                        type="number"
                        name="maxPrice"
                        value={filters.maxPrice}
                        onChange={handleFilterChange}
                    />
                </div>
            </div>

            {/* العروض */}
            <div className="filter-group2">
                <label className="filter-label">العروض</label>
                <div className="checkboxes">
                    <div className="box-content">
                        <label className="check-label">
                            <input
                                type="checkbox"
                                name="hasFreeShipping"
                                checked={filters.hasFreeShipping}
                                onChange={handleFilterChange}
                            />
                            شحن مجاني
                        </label>
                        <label className="check-label">
                            <input
                                type="checkbox"
                                name="hasDiscount"
                                checked={filters.hasDiscount}
                                onChange={handleFilterChange}
                            />
                            خصم
                        </label>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default FiltersSidebar;
