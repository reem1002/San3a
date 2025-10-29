import React, { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
    const texts = [
        "لكل المهتمين بمجال الحرف اليدوية",
        "لكل عشاق الفن والإبداع",
        "ادعم الحرفيين حول العالم",
        "ابدأ مشروعك اليدوي اليوم"
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {

            setFade(false);

            setTimeout(() => {
                setCurrentTextIndex((prev) =>
                    prev === texts.length - 1 ? 0 : prev + 1
                );
                setFade(true);
            }, 500);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-wrap">
            <div className='hero shadow-sm'>

                <div className="left_side">
                    <div className="hero_item1">
                        <p className="lefttext">تعلم</p>
                        <img src="/imgs/learn.png" alt="hero" className='leftimg' />
                    </div>
                    <img src="/imgs/flower1.png" alt="hero" className='leftflower1' />
                    <div className="hero_item2">
                        <p className="lefttext">اعرض</p>
                        <img src="/imgs/store.png" alt="hero" className='leftimg' />
                    </div>
                    <img src="/imgs/flower1.png" alt="hero" className='leftflower2' />
                    <div className="hero_item3">
                        <p className="lefttext">بيع</p>
                        <img src="/imgs/sell.png" alt="hero" className='leftimg' />
                    </div>
                </div>

                <div className="right_side">
                    <img src="/imgs/logo.png" alt="hero" className='hero_logo' />
                    <h4 className={`hero_title arabic-text smooth-text ${fade ? 'fade-in' : 'fade-out'}`}>
                        {texts[currentTextIndex]}
                    </h4>
                </div>


            </div>
            <svg
                className="hero-drip"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 120"
            >
                <path
                    fill="#f8f0df"
                    d="M0,64 C120,90 240,40 360,70 C480,100 600,40 720,70 C840,100 960,50 1080,70 C1200,90 1320,60 1440,80 L1440,120 L0,120Z"
                ></path>
            </svg>

        </div>
    );
}
