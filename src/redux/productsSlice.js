import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [
        { image: "/imgs/place.png", label: "خصم", isFree: false, name: "شمعة عطرية بالفانيليا", seller: "عطور نور", price: 60, rating: 4.6 },
        { image: "/imgs/place.png", label: "", isFree: false, name: "سوار كروشيه يدوي", seller: "هاند كرافتس", price: 45, rating: 4.4 },
        { image: "/imgs/place.png", label: "خصم", isFree: false, name: "صابون زيت الزيتون الطبيعي", seller: "عناية طبيعية", price: 30, rating: 4.2 },
        { image: "/imgs/place.png", label: "", isFree: false, name: "ميدالية مفاتيح مطرزة", seller: "خيوط وألوان", price: 25, rating: 4.1 },
        { image: "/imgs/place.png", label: "شحن مجاني", isFree: true, name: "دفتر ملاحظات يدوي", seller: "صُنع بحب", price: 70, rating: 4.8 },
        { image: "/imgs/place.png", label: "", isFree: false, name: "قلادة حجر طبيعي", seller: "إبداع حجري", price: 55, rating: 4.5 },
    ],
    filteredProducts: [],
    filters: {
        craftType: "كل الحرف",
        minPrice: "",
        maxPrice: "",
        hasFreeShipping: false,
        hasDiscount: false,
    },
    sortType: "",
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        setSortType: (state, action) => {
            state.sortType = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.filters.searchTerm = action.payload;
        },
        resetFilters: (state) => {
            state.filters = initialState.filters;
        },
        applyFilters: (state) => {
            const { craftType, minPrice, maxPrice, hasFreeShipping, hasDiscount, searchTerm } = state.filters;
            let result = [...state.allProducts];

            // البحث بالاسم أو البائع
            if (searchTerm) {
                const term = searchTerm.toLowerCase();
                result = result.filter(
                    (p) =>
                        p.name.toLowerCase().includes(term) ||
                        p.seller.toLowerCase().includes(term)
                );
            }
            // الفلترة حسب الحرف
            if (craftType !== "كل الحرف") {
                result = result.filter((p) => p.seller === craftType);
            }

            // الفلترة بالسعر
            if (minPrice) result = result.filter((p) => p.price >= Number(minPrice));
            if (maxPrice) result = result.filter((p) => p.price <= Number(maxPrice));

            // العروض
            if (hasFreeShipping && hasDiscount) {
                // أي منتج عليه خصم أو فيه شحن مجاني
                result = result.filter((p) => p.isFree || p.label === "خصم");
            } else if (hasFreeShipping) {
                result = result.filter((p) => p.isFree);
            } else if (hasDiscount) {
                result = result.filter((p) => p.label === "خصم");
            }

            // ترتيب حسب السعر أو الأحدث
            if (state.sortType === "low-to-high") {
                result.sort((a, b) => a.price - b.price);
            } else if (state.sortType === "high-to-low") {
                result.sort((a, b) => b.price - a.price);
            } else if (state.sortType === "newest") {
                result.reverse();
            }

            state.filteredProducts = result;
        },
    },
});

export const { setFilters, setSortType, resetFilters, applyFilters, setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;
