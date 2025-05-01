// components/DiscoverSection.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Discover.css"; // Import your CSS file for custom styles

const items = [
    { id: 1, option: "crafts", image: "/imgs/handcraft1.png", title: "صناعة يدوية" },
    { id: 2, option: "crafts", image: "/imgs/handcraft2.png", title: "حياكة" },
    { id: 3, option: "categories", image: "/imgs/handcraft2.png", title: "المنسوجات" },
    { id: 4, option: "crafts", image: "/imgs/handcraft1.png", title: "تطريز" },
    { id: 5, option: "crafts", image: "/imgs/handcraft2.png", title: "نقش" },
    { id: 6, option: "categories", image: "/imgs/handcraft3.png", title: "الأزياء" },
    { id: 7, option: "crafts", image: "/imgs/handcraft1.png", title: "نحت" },
    { id: 8, option: "categories", image: "/imgs/handcraft2.png", title: "الديكور" },
    { id: 9, option: "categories", image: "/imgs/handcraft3.png", title: "الأثاث" },
];

const DiscoverSection = () => {
    const [filter, setFilter] = useState("categories");


    const filteredItems =
        filter === "categories"
            ? items.filter((item) => item.option === "categories")
            : items.filter((item) => item.option === "crafts");

    return (
        <div className="bg-[#fefbf5] text-right py-8 px-4 section-container container" >
            <div className="flex items-center justify-between mb-6 upperbox">
                <h2 className="section-title ">اكتشف</h2>

                <div className="relative  option_box  border-0">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className=" option_box border-0  text-right text-[#4b4b4b] bg-[#fefbf5] focus:outline-none focus:ring-0 focus:border-0"
                    >
                        <option value="categories" className="choosed_option">الأقسام</option>
                        <hr />
                        <option value="crafts" className="choosed_option">الحرف</option>
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
                            <div className=" swip-container-img">

                                <img
                                    src={item.image}
                                    alt={`Slide ${item.id}`}
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
