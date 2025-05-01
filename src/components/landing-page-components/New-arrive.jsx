import React from "react";
import ProductCard from "./Wid-Card";
import "./New-arrive.css"; // Import your CSS file for styling

const NewArrive = () => {
    const products = [
        {
            image: "/imgs/place.png",
            label: "خصم",
            isFree: false,
            name: "شمعة عطرية بالفانيليا",
            seller: "عطور نور",
            price: 60,
            rating: 4.6,
        },
        {
            image: "/imgs/place.png",
            label: "",
            isFree: false,
            name: "سوار كروشيه يدوي",
            seller: "هاند كرافتس",
            price: 45,
            rating: 4.4,
        },
        {
            image: "/imgs/place.png",
            label: "خصم",
            isFree: false,
            name: "صابون زيت الزيتون الطبيعي",
            seller: "عناية طبيعية",
            price: 30,
            rating: 4.2,
        },
        {
            image: "/imgs/place.png",
            label: "",
            isFree: false,
            name: "ميدالية مفاتيح مطرزة",
            seller: "خيوط وألوان",
            price: 25,
            rating: 4.1,
        },
        {
            image: "/imgs/place.png",
            label: "شحن مجاني",
            isFree: true,
            name: "دفتر ملاحظات يدوي",
            seller: "صُنع بحب",
            price: 70,
            rating: 4.8,
        },
        {
            image: "/imgs/place.png",
            label: "",
            isFree: false,
            name: "قلادة حجر طبيعي",
            seller: "إبداع حجري",
            price: 55,
            rating: 4.5,
        },
    ];


    return (
        <div className="container section-container ">
            <div className="section-card-container">
                <div className="flex items-center justify-between mb-6 upperbox">
                    <h2 className="section-title ">وصلت حديثًا</h2>
                </div>
                <div className="cards-display">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            label={product.label}
                            isFree={product.isFree}
                            name={product.name}
                            seller={product.seller}

                            price={product.price}
                            rating={product.rating}

                        />
                    ))}
                </div>
            </div>

            <div className="sectionfooter">
                <spam > &lt;&lt; المزيد</spam>
            </div>
        </div>
    );
};

export default NewArrive;
