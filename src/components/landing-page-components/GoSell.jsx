import React, { useState } from 'react';
import './gosell.css';

export default function GoSell() {
    const [showModal, setShowModal] = useState(false);

    const handleConfirm = () => {
        window.open(
            "https://wa.me/201022391604?text=مرحبًا،%20أرغب%20في%20أن%20أكون%20أحد%20البائعين%20في%20منصة%20صنعة",
            "_blank"
        );
        setShowModal(false);
    };

    return (
        <section className="go-sell-container">
            <img src="/imgs/section-cover22 1.png" alt="hero" className='right-img' />
            <img src="/imgs/section-cover22 2.png" alt="hero" className='left-img' />
            <img src="/imgs/section-cover22 3.png" alt="hero" className='bottom-img' />
            <img src="/imgs/section-cover22 4.png" alt="hero" className='top-img' />

            <div className="go-sell-section">
                <div className="leftside">
                    <h4 className='sell-line'>
                        يمكنك أن تصبح واحدًا منهم اليوم
                    </h4>
                    <button className='sell-btn' onClick={() => setShowModal(true)}>
                        &lt;&lt; اضغط هنا
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-box" onClick={e => e.stopPropagation()}>
                        <h3>هل ترغب في المتابعة إلى واتساب؟</h3>
                        <p>سيتم فتح تطبيق واتساب تلقائيًا برسالة جاهزة، فقط اضغط إرسال</p>
                        <div className="modal-buttons">
                            <button className="confirm-btn" onClick={handleConfirm}>
                                نعم، تابع
                            </button>
                            <button className="cancel-btn" onClick={() => setShowModal(false)}>
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
