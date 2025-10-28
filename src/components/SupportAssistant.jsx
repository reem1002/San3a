import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SupportAssistant.css';

export default function SupportAssistant() {
    const [showModal, setShowModal] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const images = document.querySelectorAll("img");
        let loadedCount = 0;
        const totalImages = images.length;

        images.forEach((img) => {
            if (img.complete) {
                loadedCount++;
            } else {
                img.addEventListener("load", () => {
                    loadedCount++;
                    if (loadedCount === totalImages) setLoading(false);
                });
                img.addEventListener("error", () => {
                    loadedCount++;
                    if (loadedCount === totalImages) setLoading(false);
                });
            }
        });

        if (loadedCount === totalImages) setLoading(false);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 3000);
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    const handleWhatsApp = () => {
        window.open(
            "https://wa.me/201022391604?text=مرحبًا،%20أحتاج%20مساعدة%20بخصوص%20منصة%20صنعة.",
            "_blank"
        );
        setShowModal(false);
    };

    const handleGoFAQ = () => {
        navigate('/faq');
        setShowModal(false);
    };

    return (
        <>
            {loading && (
                <div className="global-loader">
                    <div className="spinner"></div>
                </div>
            )}

            <div className="assistant-container" onClick={() => setShowModal(true)}>
                <img
                    src="/imgs/helper.png"
                    alt="assistant"
                    className="assistant-img"
                />
                {showMessage && (
                    <div className="assistant-message">
                        محتاج مساعدة؟
                    </div>
                )}
            </div>

            {showModal && (
                <div className="assistant-overlay" onClick={() => setShowModal(false)}>
                    <div className="assistant-modal" onClick={(e) => e.stopPropagation()}>
                        <h4>كيف تحب نساعدك؟</h4>
                        <p>اختر وسيلة الدعم المناسبة ليك：
                        </p>
                        <div className="assistant-options">
                            <button className="support-btn" onClick={handleWhatsApp}>
                                💬 التحدث عبر واتساب
                            </button>
                            <button className="support-btn" onClick={handleGoFAQ}>
                                ❓ زيارة صفحة الأسئلة الشائعة
                            </button>
                            <button className="cancel-btn" onClick={() => setShowModal(false)}>
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
