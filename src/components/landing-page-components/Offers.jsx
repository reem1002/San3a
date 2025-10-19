import React from "react";
import "./offer.css";
import ProductCard from "./Wid-Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Offers() {
    const allProducts = useSelector((state) => state.products.allProducts);

    // فلترة المنتجات اللي فيها خصم فقط
    const discountedProducts = allProducts.filter(
        (product) => product.discount && product.discount > 0
    );

    const navigate = useNavigate();

    // الانتقال لصفحة المنتج
    const handleCardClick = (id) => {
        if (!id) return;
        navigate(`/product/${id}`);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // الانتقال لصفحة المتجر
    const handleToShop = () => {
        navigate("/shop");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="section-container section-container-offers">
            <div className="offers-section">
                <div className="leftside">
                    <div className="offerline">
                        <h4 className="line">عروض متتفوتش</h4>
                    </div>
                </div>

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
                    {discountedProducts.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div
                                onClick={() => handleCardClick(product.id)}
                                style={{ cursor: "pointer" }}
                            >
                                <ProductCard
                                    image={product.image}
                                    label={`-${product.discount}%`}
                                    isFree={product.isFree}
                                    name={product.name}
                                    seller={product.seller}
                                    craft={product.craft}
                                    price={product.price}
                                    rating={product.rating}
                                    discount={product.discount}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="sectionfooter">
                <span className="shop-link" onClick={handleToShop}>
                    المزيد &gt;&gt;
                </span>
            </div>
        </div>
    );
}
