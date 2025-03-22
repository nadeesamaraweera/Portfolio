import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";

const About = () => {
  return (
      <section className="about section" id="about">
        <h2 className="section__title">About Me👩‍🎓</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />

          <div className="about__data">
            {/* Education Timeline */}
            <h3 className="education__title">🎓 Education</h3>
            <div className="education__timeline">
              <div className="education__item">
                <div className="education__dot"></div>
                <div className="education__content">
                  <h4>Higher National Diploma</h4>
                  <p>Institute of Software Engineering</p>
                  <span>2023 - 2025</span>
                </div>
              </div>

              <div className="education__item">
                <div className="education__dot"></div>
                <div className="education__content">
                  <h4>English & Ict Diploma</h4>
                  <p>Icbt Campus</p>
                  <span>2021 - 2022</span>
                </div>
              </div>

              <div className="education__item">
                <div className="education__dot"></div>
                <div className="education__content">
                  <h4>Advanced Level Examination</h4>
                  <p>St. Mary's Convent</p>
                  <span>2017 - 2019</span>
                </div>
              </div>

              <div className="education__item">
                <div className="education__dot"></div>
                <div className="education__content">
                  <h4>Ordinary Level Examination</h4>
                  <p>St. Mary's Convent</p>
                  <span>2015 - 2016</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
