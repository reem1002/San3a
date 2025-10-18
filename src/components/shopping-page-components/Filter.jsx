// src/components/FiltersSidebar.jsx
import React from 'react';
import { FaRedoAlt } from 'react-icons/fa';
import './filter.css';

const FiltersSidebar = () => {
    return (
        <aside className="filters-sidebar">
            {/* العنوان */}
            <div className="filters-header">
                <FaRedoAlt className="reload-icon" />
                <span>فلاتر البحث</span>
            </div>
            <div className="divider" ></div>

            {/* الحرف */}
            <div className="filter-group1">
                <label className="filter-label">الحرف</label>
                <select className="filter-select">
                    <option>كل الحرف</option>
                    <option>المنسوجات</option>
                    <option>الطين</option>
                    <option>الخرز</option>
                </select>
            </div>

            {/* السعر */}
            <div className="filter-group1">
                <label className="filter-label">السعر </label>
                <div className="price-inputs">
                    <span>من</span>
                    <input type="number" placeholder="" />
                    <span>إلى</span>
                    <input type="number" placeholder="" />
                </div>
            </div>

            {/* حالة المنتج */}
            <div className="filter-group2">
                <label className="filter-label">حالة المنتج</label>
                <div className="checkboxes">
                    <div className="box-content">
                        <label className="check-label"><input type="checkbox" /> فيزيائية</label>
                        <label className="check-label"><input type="checkbox" /> ديجيتال</label>
                    </div>
                </div>
            </div>

            {/* العروض */}
            <div className="filter-group2">
                <label className="filter-label">العروض</label>
                <div className="checkboxes">
                    <div className="box-content">
                        <label className="check-label"><input type="checkbox" /> شحن مجاني</label>
                        <label className="check-label"><input type="checkbox" /> خصم</label>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default FiltersSidebar;
