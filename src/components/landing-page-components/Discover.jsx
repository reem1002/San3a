import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilters, applyFilters } from "../../redux/productsSlice.js";

import "swiper/css";
import "swiper/css/navigation";
import "./Discover.css";

const items = [
    // 🟢 الحرف
    { id: 1, option: "crafts", image: "/imgs/handcraft1.png", title: "شموع" },
    { id: 2, option: "crafts", image: "/imgs/handcraft2.png", title: "كروشيه" },
    { id: 3, option: "crafts", image: "/imgs/handcraft2.png", title: "تطريز" },
    { id: 4, option: "crafts", image: "/imgs/handcraft1.png", title: "خشب" },
    { id: 5, option: "crafts", image: "/imgs/handcraft3.png", title: "صابون طبيعي" },
    { id: 6, option: "crafts", image: "/imgs/handcraft1.png", title: "فن الخيوط" },
    { id: 7, option: "crafts", image: "/imgs/handcraft1.png", title: "فخار" },
    { id: 8, option: "crafts", image: "/imgs/handcraft2.png", title: "حجارة" },
    { id: 9, option: "crafts", image: "/imgs/handcraft2.png", title: "خوص" },

    // 🟣 الأقسام
    { id: 10, option: "categories", image: "/imgs/handcraft3.png", title: "الديكور" },
    { id: 11, option: "categories", image: "/imgs/handcraft2.png", title: "الإكسسوارات" },
    { id: 12, option: "categories", image: "/imgs/handcraft3.png", title: "العناية" },
    { id: 13, option: "categories", image: "/imgs/handcraft1.png", title: "القرطاسية" },
    { id: 14, option: "categories", image: "/imgs/handcraft1.png", title: "الهدايا" },
];

const DiscoverSection = () => {
    const [filter, setFilter] = useState("categories");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const filteredItems =
        filter === "categories"
            ? items.filter((item) => item.option === "categories")
            : items.filter((item) => item.option === "crafts");

    const handleClick = (item) => {
        if (item.option === "categories") {
            // بدل category بـ section
            dispatch(setFilters({ section: item.title }));
        } else {
            dispatch(setFilters({ craft: item.title }));
        }

        dispatch(applyFilters());
        navigate("/shop");
        window.scrollTo(0, 0);
    };


    return (
        <div className="bg-[#fefbf5] text-right py-8 px-4 section-container container des-section-container">
            <div className="flex items-center justify-between mb-6 upperbox">
                <h2 className="section-title">اكتشف</h2>

                <div className="relative option_box border-0">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="option_box border-0 text-right text-[#4b4b4b] bg-[#fefbf5] focus:outline-none focus:ring-0 focus:border-0"
                    >
                        <option value="categories" className="choosed_option">
                            الأقسام
                        </option>
                        <option value="crafts" className="choosed_option">
                            الحرف
                        </option>
                    </select>
                </div>
            </div>

            <div className="swiper-container">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1.3}
                    navigation
                    className="mySwiper"
                    breakpoints={{
                        760: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {filteredItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div
                                className="swip-container-img cursor-pointer"
                                onClick={() => handleClick(item)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="swip-img"
                                />
                                <span className="overlay-text">{item.title}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default DiscoverSection;
