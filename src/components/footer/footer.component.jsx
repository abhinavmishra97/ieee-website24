import React from 'react';
import './footer.styling.css'; 
import ieeeLogo from '../../assets/ieee_logo_footer.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="left">
                    <img src={ieeeLogo} alt="IEEE Logo" />
                </div>
                <div className="center">
                    <h3>Contact Us</h3>
                    <p>Vimarsh Mishra<br />📞 +91 99151-63165</p>
                    <p>Devanshi Mishra<br />📞 +91 88400-21366</p>
                    <p>📧 Email: ieeesbjiitweb@gmail.com</p>
                </div>
                <div className="right">
                    <h3>Connect with us</h3>
                    <div className="social-media">
                        <a href="https://www.instagram.com/ieeesbjiit?igsh=bnk1amRxeGdxNGts" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="Instagram" />
                        </a>
                        <a href="https://www.facebook.com/ieeesbjiit/" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=000000" alt="Facebook" className='whiteBg'/>
                        </a>
                        <a href="https://github.com/ieeesbjiit" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="GitHub" className='whiteBg'/>
                        </a>
                        <a href="https://www.linkedin.com/company/ieee-student-branch-jiit/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="LinkedIn" />
                        </a>
                        <a href="https://whatsapp.com/channel/0029VajH49o42DcniGpYxj3j" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/?size=100&id=5lQKOaVNF38O&format=png&color=000000" alt="WhatsApp" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="developed-by">
                <p>Developed by Apoorv Mittal, Kritika Sharma, Kanak , Akshit Gupta, Yug Jindal and Vansh Sharma</p>
            </div>
        </footer>
    );
}

export default Footer;
