import React, { useState, useEffect } from 'react';
import './header.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
	const [Toggle, showMenu] = useState(false);
	const [activeNav, setActiveNav] = useState('#home');

	useEffect(() => {
		const sections = document.querySelectorAll('section');
		const links = document.querySelectorAll('.nav__link');


		const observerOptions = {
			threshold: 0.5, // Trigger when 50% of the section is in view
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const id = entry.target.getAttribute('id');
				const link = document.querySelector(`a[href="#${id}"]`);
				if (entry.isIntersecting) {
					links.forEach((link) => link.classList.remove('active-link'));
					link.classList.add('active-link');
					setActiveNav(`#${id}`);  // Update activeNav when section is in view
				}
			});
		}, observerOptions);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	window.addEventListener('scroll', function () {
		const header = document.querySelector('.header');
		if (this.scrollY >= 80) header.classList.add('scroll-header');
		else header.classList.remove('scroll-header');
	});

	return (
		<header className='header'>
			<nav className='nav container'>
				<a href='index.html ' className='nav__logo'>
					&lt;Nadeesha/&gt;
				</a>

				<div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
					<ul className='nav__list grid'>
						<li className='nav__item'>
							<a
								href='#home'
								onClick={() => setActiveNav('#home')}
								className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}
							>
								<i className='uil uil-estate nav__icon'></i> Home
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#about'
								onClick={() => setActiveNav('#about')}
								className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}
							>
								<i className='uil uil-user nav__icon'></i> About
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#skills'
								onClick={() => setActiveNav('#skills')}
								className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}
							>
								<i className='uil uil-file-alt nav__icon'></i> Skills
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#services'
								onClick={() => setActiveNav('#services')}
								className={activeNav === '#services' ? 'nav__link active-link' : 'nav__link'}
							>
								<i className='uil uil-bag-alt nav__icon'></i> Services
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#projects'
								onClick={() => setActiveNav('#projects')}
								className={activeNav === '#projects' ? 'nav__link active-link' : 'nav__link'}
							>
								<i className='uil uil-scenery nav__icon'></i> Projects
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#contact'
								onClick={() => setActiveNav('#contact')}
								className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}
							>
								<i className='uil uil-message nav__icon'></i> Contact Me
							</a>
						</li>
						<li className='nav__item theme-toggle-desktop'>
							<ThemeToggle />
						</li>
					</ul>

					<i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
				</div>

				{!Toggle && (
					<div className='theme-toggle-mobile'>
						<ThemeToggle />
					</div>
				)}

				<div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
					<i className='uil uil-apps'></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
