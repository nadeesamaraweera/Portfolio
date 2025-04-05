import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="section Services section" id="services">
        <h2 className="section__title">Services 💼</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            {/* Service card - UI/UX Design */}
            <div className="services__content">
                <div>
                    <i className="uil uil-brush-alt services__icon"></i>
                    <h3 className="services__title">UI/UX <br /> Design</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">UI/UX Design</h3>
                        <p className="services__modal-description">
                            Enhancing digital experiences with visually compelling and intuitive user interfaces.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-star services__modal-icon"></i>
                                <p className="services__modal-info">Designing intuitive and engaging interfaces.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-star services__modal-icon"></i>
                                <p className="services__modal-info">Creating wireframes and interactive prototypes.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-star services__modal-icon"></i>
                                <p className="services__modal-info">Improving user experience through usability testing.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-star services__modal-icon"></i>
                                <p className="services__modal-info">Crafting responsive and user-friendly designs.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-star services__modal-icon"></i>
                                <p className="services__modal-info">Developing consistent design systems and branding.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Service card - Software Development */}
            <div className="services__content">
                <div>
                    <i className="uil uil-code-branch services__icon"></i>
                    <h3 className="services__title">Software <br /> Development</h3>
                </div>
                <span onClick={() => toggleTab(3)} className="services__button">
        View More <i className="uil uil-arrow-right services__button-icon"></i>
    </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Software Development</h3>
                        <p className="services__modal-description">
                            Building reliable, scalable, and efficient software solutions tailored to business and user needs.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-wrench services__modal-icon"></i>
                                <p className="services__modal-info">Custom software development.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-wrench services__modal-icon"></i>
                                <p className="services__modal-info">Full-stack application development.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-wrench services__modal-icon"></i>
                                <p className="services__modal-info">API development and integrations.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-wrench services__modal-icon"></i>
                                <p className="services__modal-info">Enterprise software solutions.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-wrench services__modal-icon"></i>
                                <p className="services__modal-info">Cloud-based and SaaS development.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Service card - Web Design */}
            <div className="services__content">
                <div>
                    <i className="uil uil-globe services__icon"></i>
                    <h3 className="services__title">Web <br /> Design</h3>
                </div>
                <span onClick={() => toggleTab(4)} className="services__button">
        View More <i className="uil uil-arrow-right services__button-icon"></i>
    </span>

                <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Web Design</h3>
                        <p className="services__modal-description">
                            Crafting visually appealing and user-friendly websites to enhance digital experiences and engage audiences.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-lightbulb-alt services__modal-icon"></i>
                                <p className="services__modal-info">Custom website design tailored to your brand.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-lightbulb-alt services__modal-icon"></i>
                                <p className="services__modal-info">Responsive and mobile-friendly web layouts.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-lightbulb-alt services__modal-icon"></i>
                                <p className="services__modal-info">User experience (UX) and interface (UI) optimization.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-lightbulb-alt services__modal-icon"></i>
                                <p className="services__modal-info">Landing pages and e-commerce website design.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-lightbulb-alt services__modal-icon"></i>
                                <p className="services__modal-info">Website redesigns and performance enhancements.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>

  );
};
export default Services