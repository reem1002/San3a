import React from 'react'
import './gosell.css'

export default function GoSell() {
    return (
        <div className='go-sell-container'>
            <div className='go-sell-section'>
                <div className="leftside">
                    <h4 className='sell-line'>
                        يمكنك أن تصبح واحدًا منهم اليوم
                    </h4>
                    <a
                        href="https://wa.me/201022391604?text=مرحبًا،%20أرغب%20في%20أن%20أكون%20أحد%20البائعين%20في%20منصة%20صنعة"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='sell-btn'
                    >
                        &lt;&lt; اضغط هنا
                    </a>
                    <p className="sell-hint explain">
                        سيتم فتح واتساب وكتابة رسالة تلقائية، فقط اضغط إرسال
                    </p>
                </div>
            </div>
        </div>
    )
}
