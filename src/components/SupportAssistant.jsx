import React, { useState, useEffect } from 'react';
import './SupportAssistant.css';

export default function SupportAssistant() {
    const [showModal, setShowModal] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [loading, setLoading] = useState(true);


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

    const handleConfirm = () => {
        window.open(
            "https://wa.me/201022391604?text=مرحبًا،%20أحتاج%20مساعدة%20بخصوص%20منصة%20صنعة.",
            "_blank"
        );
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
                        <h4>هل ترغب في التحدث عبر واتساب؟</h4>
                        <p>سيتم فتح محادثة تلقائيًا، فقط اضغط نعم</p>
                        <div className="assistant-buttons">
                            <button className="yes-btn" onClick={handleConfirm}>نعم</button>
                            <button className="no-btn" onClick={() => setShowModal(false)}>إلغاء</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
