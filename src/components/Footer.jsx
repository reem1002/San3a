import './Footer.css';
import { FaLinkedin, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer shadow-lg">
            <div className="footer-content container">
                <div className="footer-subscribe">
                    <input type="email" placeholder="اكتب إيميلك هنا" />
                    <button>اشترك الآن</button>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-social">
                    <p className="footer-title">
                        اعرف أكثر عننا من خلال:
                    </p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/company/san3a/" target="_blank" rel="noopener noreferrer" title="لينكدإن">
                            <FaLinkedin />
                        </a>
                        <a href="https://wa.me/201022391604" target="_blank" rel="noopener noreferrer" title="واتساب">
                            <FaWhatsapp />
                        </a>
                        <a href="https://tr.ee/gJiHKxiomv" target="_blank" rel="noopener noreferrer" title="فيسبوك">
                            <FaFacebook />
                        </a>
                        <a href="https://tr.ee/5BBrhvOGve" target="_blank" rel="noopener noreferrer" title="إنستجرام">
                            <FaInstagram />
                        </a>
                    </div>

                </div>




            </div>

            <div className="footer-bottom shadow-sm">
                <p>حقوق النشر محفوظة © 2025 - San3a</p>
            </div>
        </footer>
    );
};

export default Footer;
