import React, { useState } from "react";
import "./checkoutForm.css";

export default function CheckoutForm({ cartItems, totalWithShipping, shippingCost, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        city: "",
        area: "",
        streetDetails: "",
        notes: "",
        payment: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); // ✅ لمنع الضغط المكرر
    const [hasSubmitted, setHasSubmitted] = useState(false); // ✅ لمنع الإرسال نهائيًا بعد نجاحه

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim() || formData.name.split(" ").length < 2) {
            newErrors.name = "الاسم يجب أن يحتوي على اسم ولقب على الأقل.";
        }

        if (!/^01[0-9]{9}$/.test(formData.phone)) {
            newErrors.phone = "رقم الهاتف الذي أدخلته غير صحيح.";
        }

        if (!formData.city) {
            newErrors.city = "من فضلك اختر المحافظة.";
        }

        if (formData.area.trim().length < 3) {
            newErrors.area = "من فضلك أدخل اسم المنطقة أو الحي.";
        }

        if (formData.streetDetails.trim().length < 5) {
            newErrors.streetDetails = "أدخل تفاصيل دقيقة (الشارع، رقم العمارة، الدور...).";
        }

        if (!formData.payment) {
            newErrors.payment = "من فضلك اختر طريقة الدفع.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSubmitting || hasSubmitted) return;
        if (!validateForm()) return;

        setIsSubmitting(true);

        let message = "*طلب جديد من منصة صنعة:*\n\n";

        cartItems.forEach((item, index) => {
            message += `*${index + 1}. ${item.name}* (كود المنتج: ${item.id})\n`;
            message += `الكمية: ${item.quantity}\n`;
            message += `السعر: ${item.price} × ${item.quantity} = *${item.price * item.quantity} ج.م*\n\n`;
        });

        message += `*مصاريف الشحن:* ${shippingCost} ج.م\n`;
        message += `*الإجمالي الكلي:* ${totalWithShipping} ج.م\n\n`;
        message += `*اسم العميل:* ${formData.name}\n`;
        message += `*رقم الموبايل:* ${formData.phone}\n`;
        message += `*المحافظة:* ${formData.city}\n`;
        message += `*المنطقة:* ${formData.area}\n`;
        message += `*تفاصيل العنوان:* ${formData.streetDetails}\n`;
        if (formData.notes) message += `*ملاحظات:* ${formData.notes}\n`;
        message += `*طريقة الدفع:* ${formData.payment}\n`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "201022391604";


        setTimeout(() => {
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
            setHasSubmitted(true);
            setIsSubmitting(false);
            onClose();
        }, 800);
    };

    const cities = [
        "القاهرة", "الجيزة", "الإسكندرية", "المنوفية", "الدقهلية", "الشرقية",
        "الغربية", "البحيرة", "الفيوم", "بني سويف", "أسيوط", "أسوان",
        "سوهاج", "قنا", "الأقصر", "دمياط", "بورسعيد", "الإسماعيلية",
        "السويس", "كفر الشيخ"
    ];

    const payments = ["الدفع عند الاستلام", "محفظة إلكترونية"];

    return (
        <div className="checkout-overlay">
            <div className="checkout-popup">
                <button className="close-btn" onClick={onClose}>✖</button>
                <h3>بيانات التوصيل</h3>
                <hr className="divider" />

                <form onSubmit={handleSubmit}>
                    {/* البيانات الشخصية */}
                    <h4 className="section-title">البيانات الشخصية</h4>
                    <div className="input-row">
                        <div className="field-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="الاسم الكامل"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="error-text">{errors.name}</p>}
                        </div>

                        <div className="field-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="رقم الموبايل"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className="error-text">{errors.phone}</p>}
                        </div>
                    </div>

                    {/* العنوان */}
                    <h4 className="section-title">العنوان</h4>
                    <div className="input-row">
                        <div className="field-group">
                            <select name="city" value={formData.city} onChange={handleChange}>
                                <option value="">اختر المحافظة</option>
                                {cities.map((c, i) => (
                                    <option key={i} value={c}>{c}</option>
                                ))}
                            </select>
                            {errors.city && <p className="error-text">{errors.city}</p>}
                        </div>

                        <div className="field-group">
                            <input
                                type="text"
                                name="area"
                                placeholder="المنطقة / الحي"
                                value={formData.area}
                                onChange={handleChange}
                            />
                            {errors.area && <p className="error-text">{errors.area}</p>}
                        </div>
                    </div>

                    <div className="input-row">
                        <div className="field-group full-width">
                            <textarea
                                name="streetDetails"
                                placeholder="تفاصيل دقيقة (الشارع، رقم العمارة، الدور، الشقة...)"
                                value={formData.streetDetails}
                                onChange={handleChange}
                            ></textarea>
                            {errors.streetDetails && <p className="error-text">{errors.streetDetails}</p>}
                        </div>
                    </div>

                    {/* <div className="input-row">
                        <div className="field-group full-width">
                            <textarea
                                name="notes"
                                placeholder="ملاحظات إضافية (اختياري)"
                                value={formData.notes}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div> */}

                    {/* طريقة الدفع */}
                    <h4 className="section-title">طريقة الدفع</h4>
                    <div className="field-group full-width">
                        <select name="payment" value={formData.payment} onChange={handleChange}>
                            <option value="">اختر طريقة الدفع</option>
                            {payments.map((p, i) => (
                                <option key={i} value={p}>{p}</option>
                            ))}
                        </select>
                        {errors.payment && <p className="error-text">{errors.payment}</p>}
                    </div>

                    <button
                        type="submit"
                        className={`send-btn ${isSubmitting || hasSubmitted ? "disabled" : ""}`}
                        disabled={isSubmitting || hasSubmitted}
                    >
                        {isSubmitting ? "جارٍ الإرسال..." : hasSubmitted ? "تم الإرسال" : "إرسال الطلب"}
                    </button>
                </form>
            </div>
        </div>
    );
}
