import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./shop.css";
import ProductCard from "../landing-page-components/Wid-Card";
import ResultsHeader from "./Result-header";
import PaginationComponent from "./Pagination";
import FiltersSidebar from "./Filter";

const ShopProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const { filteredProducts, allProducts, filters } = useSelector(
        (state) => state.products
    );

  
    const isFiltering =
        Object.values(filters).some(
            (val) => val !== "" && val !== false && val !== "كل الحرف"
        );

   
    let products;
    if (filteredProducts.length > 0) {
        products = filteredProducts;
    } else if (filteredProducts.length === 0 && isFiltering) {
        products = []; 
    } else {
        products = allProducts; 
    }

    const productsPerPage = 10;
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
    const totalPages = Math.ceil(products.length / productsPerPage);

    return (
        <div className="shop-container">
            <ResultsHeader
                totalResults={products.length}
                isSidebarVisible={isSidebarVisible}
                setIsSidebarVisible={setIsSidebarVisible}
            />

            <div className="shop-content">
                {isSidebarVisible && <FiltersSidebar />}

                <div
                    className={`cards-display ${isSidebarVisible ? "with-sidebar" : "full-width"
                        }`}
                >
                    {products.length > 0 ? (
                        currentProducts.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))
                    ) : (
                        <div className="no-results-message">
                            <img
                                src="/imgs/empty.png"
                                alt="No results"
                                className="no-results-img"
                            />
                            <p>لا توجد نتائج مطابقة لبحثك</p>
                        </div>
                    )}
                </div>
            </div>

            {products.length > 0 && (
                <PaginationComponent
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
};

export default ShopProducts;
