
import React, { useEffect, useRef, useState } from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import profileImg from '../../assets/my.jpg';

const techStack = [
    { name: "React", angle: 60 },
    { name: "JavaScript", angle: 120 },
    { name: "CSS", angle: 180 },
    { name: "HTML", angle: 240 },
    { name: "Node.js", angle: 300 },
    { name: "MongoDB", angle: 360 },
];

const Home = () => {
    const parallaxRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            if (parallaxRef.current) {
                parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        };

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 50,
                y: (e.clientY / window.innerHeight - 0.5) * 50
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className="home section" id="home">
            <div className="home__container container grid" ref={parallaxRef}>
                <div className="home__content grid">
                    <Social />

                    <div className="home__img-wrapper">
                        <img src={profileImg} alt="Home Image" className="home__img" />
                        <div className="home__img-glow"></div>

                        {/* Floating Technology Tags */}
                        <div className="tech-tags">
                            {techStack.map((tech, index) => {
                                // Calculate the positions based on the angle
                                const radius = 100; // The radius of the circle
                                const angleInRadians = tech.angle * (Math.PI / 180);
                                const x = Math.cos(angleInRadians) * radius;
                                const y = Math.sin(angleInRadians) * radius;

                                return (
                                    <span
                                        key={index}
                                        className="tech-tag"
                                        style={{
                                            top: `calc(100% + ${y}px)`,
                                            left: `calc(100% + ${x}px)`,
                                        }}
                                    >
                                        {tech.name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    <Data />
                </div>

                <ScrollDown />
            </div>
        </section>
    );
};

export default Home;
