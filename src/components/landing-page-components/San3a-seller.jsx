import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SellerCard from "./Sellercard"; 
import './seller.css'

const KnowSellers = () => {
    const sellers = [
        {
            image: "/imgs/place1.png",
            name: "عطور نور",
            description: "متخصصون في صناعة العطور الطبيعية",
            rating: 4.5,
        },
        {
            image: "/imgs/place.png",
            name: "هاند كرافتس",
            description: "صناعة يدوية فريدة من نوعها",
            rating: 4.7,
        },
        {
            image: "/imgs/place1.png",
            name: "عناية طبيعية",
            description: "منتجات طبيعية للعناية بالبشرة",
            rating: 4.6,
        },
        {
            image: "/imgs/place2.png",
            name: "خيوط وألوان",
            description: "أعمال فنية مميزة باستخدام الخيوط والألوان",
            rating: 4.8,
        },
        {
            image: "/imgs/place1.png",
            name: "صُنع بحب",
            description: "منتجات مصنوعة يدويًا بكل حب وإتقان",
            rating: 4.6,
        },
        {
            image: "/imgs/place.png",
            name: "إبداع حجري",
            description: "تصاميم مميزة باستخدام الحجارة الطبيعية",
            rating: 4.5,
        },
        {
            image: "/imgs/place2.png",
            name: "لمسة فنية",
            description: "ديكورات يدوية بلمسات فنية رائعة",
            rating: 4.7,
        },
        {
            image: "/imgs/place1.png",
            name: "فن الخيوط",
            description: "فن بصري مبدع باستخدام خيوط الصوف",
            rating: 4.9,
        },
        {
            image: "/imgs/place.png",
            name: "كروشيه ستايل",
            description: "إكسسوارات وأزياء كروشيه عصرية",
            rating: 4.5,
        },
        {
            image: "/imgs/place2.png",
            name: "بيور ناتشرال",
            description: "منتجات عناية طبيعية وآمنة تمامًا",
            rating: 4.3,
        },
        {
            image: "/imgs/place1.png",
            name: "إبداع خشبي",
            description: "منتجات خشبية فريدة بحرفية عالية",
            rating: 4.8,
        },
        {
            image: "/imgs/place.png",
            name: "لمسات شرقية",
            description: "منتجات يدوية مستوحاة من الطابع الشرقي",
            rating: 4.5,
        },
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };



    return (
        <div className="container seller-container">
            <div className="flex items-center justify-between mb-6 upperbox sec-title">
                <h2 className="section-title ">تعرف على بائعي صنعة</h2>
                {/* <span className="section-subtitle">الجميع</span> */}
            </div>
            <Slider {...settings} className="slider-container">
                {sellers.map((seller, index) => (
                    <SellerCard
                        key={index}
                        image={seller.image}
                        name={seller.name}
                        description={seller.description}
                        color={index % 2 === 0 ? "pink" : "yellow"}
                        rating={seller.rating}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default KnowSellers;
