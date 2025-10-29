import React, { useRef, useState, useEffect } from "react";
import "./AboutUs.css";

export default function AboutUs() {
    const scrollRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const sections = [
        {
            title: "من نحن",
            text: "نحن فريق مؤمن بقوة الحِرف اليدوية، نسعى لتمكين الأفراد في العالم العربي من تطوير مهاراتهم الحرفية وتحويل شغفهم إلى مصدر دخل مستدام. منصّتنا تجمع بين التعلم، البيع، والدعم المجتمعي في مكان واحد",
        },
        {
            title: "رؤيتنا",
            text: "أن نصبح المنصة الرائدة في تمكين الحرفيين وأصحاب المشاريع الصغيرة في المنطقة العربية للوصول إلى الاستقلال المالي، وبناء مجتمع مزدهر قائم على الإبداع والعمل اليدوي",
        },
        {
            title: "قيمنا",
            text: "نؤمن بالإبداع كطريق للتغيير، وبالتعاون كقوة للنمو، وبالتعلّم المستمر كوسيلة لتحقيق الطموح. هدفنا هو أن نجعل من كل صانع قصة نجاح حقيقية",
        },
    ];

    useEffect(() => {
        const el = scrollRef.current;
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const maxScroll = el.scrollHeight - el.clientHeight;
                    const scrolled = el.scrollTop;
                    const ratio = scrolled / maxScroll;
                    setProgress(ratio);
                    const index = Math.round(ratio * (sections.length - 1));
                    setActiveIndex(index);
                    ticking = false;
                });
                ticking = true;
            }
        };

        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, [sections.length]);

    function getHorizontalDistance() {
        const timeline = document.querySelector(".timeline");
        if (!timeline) return 0;
        const width = timeline.offsetWidth;
        return width - 80;
    }


    return (
        <div className="aboutus-container">
            {/* الجزء الثابت */}
            <div className="aboutus-right">
                <div className="timeline">
                    {sections.map((_, i) => (
                        <div
                            key={i}
                            className={`station ${i === activeIndex ? "active" : ""}`}
                        ></div>
                    ))}
                    <img
                        src="/imgs/helper_flower.png"
                        alt="character"
                        className="character"
                        ref={(el) => (window.characterRef = el)}
                        style={
                            window.innerWidth <= 768
                                ? {
                                    transform: `translateX(${progress * getHorizontalDistance()}px)`,
                                }
                                : {
                                    transform: `translateY(${progress * (260 - 40)}px)`,
                                }
                        }
                    />


                </div>
            </div>

            {/* الجزء المتحرك */}
            <div className="aboutus-left" ref={scrollRef}>
                {sections.map((section, i) => (
                    <div key={i} className="aboutus-section arabic-text">
                        <h2>{section.title}</h2>
                        <p>{section.text}.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
