import React from 'react';
import './result.css';

const ResultsHeader = ({ totalResults }) => {
    return (
        <div className="results-header">
            <span>لقد وجدنا <strong>{totalResults}</strong> منتج مطابق لبحثك</span>
            <div className="sort-section">
                <select>
                    <option>مرتبة بحسب</option>
                    <option>الأحدث</option>
                    <option>السعر من الأقل للأعلى</option>
                    <option>السعر من الأعلى للأقل</option>
                </select>
            </div>
        </div>
    );
};

export default ResultsHeader;
