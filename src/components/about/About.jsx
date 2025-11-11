import React from "react";
import "./about.css";

const About = () => {

  return (
      <section className="about section" id="about">
        <h2 className="section__title">About Me👩‍🎓</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="about__container container grid">
          {/* Education Section - Left Side */}
          <div className="about__data">
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
                  <h4>English & ICT Diploma</h4>
                  <p>ICBT Campus</p>
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

          {/* Experience Section - Right Side */}
          <div className="about__data">
            <h3 className="education__title">💼 Experience</h3>
            <div className="education__timeline">
              <div className="education__item">
                <div className="education__dot"></div>
                <div className="education__content">
                  <h4>Full Stack Developer Intern</h4>
                  <p>SLT Mobitel</p>
                  <span>6 Months</span>
                  <ul className="experience__description">
                    <li>Developed end-to-end web and mobile applications.</li>
                    <li>Worked with modern technologies including  Next.js.</li>
                    <li>Collaborated with cross-functional teams on various projects.</li>
                    <li>Implemented responsive designs and optimized application performance.</li>
                  </ul>
                </div>
              </div>
              <div className="education__item">
                <div className="education__dot"></div>
                <div className="education__content">
                  <h4>Flutter Intern</h4>
                  <p>SLT Mobitel</p>
                  <span>1 Month</span>
                  <ul className="experience__description">
                    <li>Developed  mobile applications.</li>
                    <li>Worked with modern technologies including Flutter.</li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;