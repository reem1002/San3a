import React, { useState } from "react";
import "./Faq.css";

export default function FAQ() {
    const [category, setCategory] = useState("شراء");
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = {
        شراء: [
            { q: "هل لازم أعمل حساب قبل ما أشتري؟", a: "لا، حاليًا تقدر تطلب المنتج مباشرة من غير ما تعمل حساب." },
            { q: "ايه طرق الدفع المتاحة؟", a: "في الوقت الحالي بنوفر الدفع عن طريق المحافظ الإلكترونية أو عند الاستلام." },
            { q: "هل فيه توصيل لكل المحافظات؟", a: "لسه شغالين على ده وبنوسع دايمًا علشان نغطي كل المحافظات قريب." },
            { q: "الأوردر بتاعي بيتأكد إزاي؟", a: "بعد الطلب، بنتواصل معاك على الواتساب لتأكيد الأوردر والدفع." },
        ],
        البائعين: [
            { q: "ازاي أسجل كبائع في المنصة؟", a: "سهل جدًا، تواصل معانا على الواتساب الموجود في الصفحة الرئيسية." },
            { q: "هل التسجيل كبائع مجاني؟", a: "أيوه، التسجيل مجاني حاليًا خلال فترة التشغيل التجريبي." },
            { q: "إزاي أضيف منتج جديد؟", a: "بعد تفعيل حسابك، هتقدر تضيف منتجاتك من لوحة التحكم." },
        ],
        الدعم: [
            { q: "المنتج اتأخر في التوصيل، أعمل إيه؟", a: "تقدر تتواصل مع فريق الدعم على الواتساب لمتابعة حالتك فورًا." },
            { q: "عايز أبلغ عن مشكلة أو بائع؟", a: "كلمنا على الواتساب أو استخدم فورم التواصل في الموقع." },
            { q: "هل الموقع آمن؟", a: "أكيد ❤️ خصوصيتك وأمان بياناتك من أولوياتنا." },
        ],
    };

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            {/* 🖼️ البانر */}
            <div className="faq-banner-container">
                <img src="/imgs/faq-banner.png" alt="FAQ Banner" className="faq-banner" />
            </div>

            {/* 📌 العنوان + الفئة */}
            <div className="faq-header">
                <h3>الأسئلة الشائعة</h3>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="faq-select"
                >
                    <option value="شراء">الشراء</option>
                    <option value="البائعين">البائعين</option>
                    <option value="الدعم">الدعم</option>
                </select>
            </div>

            {/* ❓الأسئلة */}
            <div className="faq-container">
                {faqs[category].map((item, index) => (
                    <div key={index} className="faq-item ">
                        <button className="faq-question" onClick={() => handleToggle(index)}>
                            <span>{item.q}</span>
                            <span className={`arrow ${openIndex === index ? "open" : ""}`}>&#9662;</span>
                        </button>
                        <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
                            <p className="arabic-text">{item.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
