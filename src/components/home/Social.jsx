import React from 'react';

const Social = () => {
    return (
        <div className="home__social">
            <div className="social-icon-wrapper">
                <a href="https://github.com/nadeesamaraweera" target="_blank" rel="noopener noreferrer">
                    <button className="home__social-icon github">
                        <i className="uil uil-github-alt"></i>
                        <span className="social-label">GitHub</span>
                    </button>
                </a>
            </div>

            <div className="social-icon-wrapper">
                <a href="https://linkedin.com/in/nadeesamaraweera" target="_blank" rel="noopener noreferrer">
                    <button className="home__social-icon linkedin">
                        <i className="uil uil-linkedin"></i>
                        <span className="social-label">LinkedIn</span>
                    </button>
                </a>
            </div>

            <div className="social-icon-wrapper">
                <a href="https://www.instagram.com/nadee_00_?igsh=aDl4dnR4NmZ0bHo5 " target="_blank" rel="noopener noreferrer">
                    <button className="home__social-icon instagram">
                        <i className="uil uil-instagram"></i>
                        <span className="social-label">Instagram</span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Social;
