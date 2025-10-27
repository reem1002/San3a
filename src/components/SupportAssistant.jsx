import React, { useState, useEffect } from 'react';
import './SupportAssistant.css';

export default function SupportAssistant() {
    const [showModal, setShowModal] = useState(false);
    const [showMessage, setShowMessage] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 3000);
        }, 60000);
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
            {/* الزر الثابت */}
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

            {/* المودال */}
            {showModal && (
                <div className="assistant-overlay" onClick={() => setShowModal(false)}>
                    <div className="assistant-modal" onClick={(e) => e.stopPropagation()}>
                        <h4>هل ترغب في التحدث عبر واتساب؟</h4>
                        <p>سيتم فتح محادثة تلقائيًا، فقط اضغط "نعم"</p>
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
