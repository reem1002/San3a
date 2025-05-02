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
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaWhatsapp /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>




            </div>

            <div className="footer-bottom">
                <p>حقوق النشر محفوظة © 2025 - San3a</p>
            </div>
        </footer>
    );
};

export default Footer;
