import React from 'react'
import './offer.css'
import ProductCard from './Wid-Card'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


const products = [
    {
        image: "/imgs/place.png",
        label: "-20%",
        name: "شمعة عطرية بالفانيليا",
        seller: "عطور نور",
        price: 60,
        rating: 4.6,
    },
    {
        image: "/imgs/place.png",
        label: "-50%",
        name: "سوار كروشيه يدوي",
        seller: "هاند كرافتس",
        price: 45,
        rating: 4.4,
    },
    {
        image: "/imgs/place.png",
        label: "-20%",
        name: "صابون زيت الزيتون الطبيعي",
        seller: "عناية طبيعية",
        price: 30,
        rating: 4.2,
    },
    {
        image: "/imgs/place.png",
        label: "-30%",
        name: "ميدالية مفاتيح مطرزة",
        seller: "خيوط وألوان",
        price: 25,
        rating: 4.1,
    },

];
export default function Offers() {
    return (
        <div className=' section-container  section-container-offers'>
            <div className='offers-section'>
                <div className="leftside">
                    <div className="offerline">
                        <h4 className="line">
                            عروض متتفوتش
                        </h4>
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

                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <ProductCard
                                image={product.image}
                                label={product.label}
                                isFree={product.isFree}
                                name={product.name}
                                seller={product.seller}
                                price={product.price}
                                rating={product.rating}
                            />
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
            <div className="sectionfooter">
                <span > المزيد &gt;&gt;</span>
            </div>
        </div>
    )
}

