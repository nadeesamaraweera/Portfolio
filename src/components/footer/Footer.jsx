import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Nadeesha Samaraweera/&gt;</h1>

            <div className="footer__social">
                <a href="ttps://www.instagram.com/nadee_00_?igsh=aDl4dnR4NmZ0bHo5 " className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="www.linkedin.com/in/nadeesha-samaraweera-45045a30b" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="ttps://github.com/nadeesamaraweera" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169;2025 Nadeesha Samaraweera. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer