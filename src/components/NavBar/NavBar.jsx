import React from 'react';

import Logo from '../../assets/images/logo2.png';

import './NavBar.scss';

const NavBar = () => {
	return (
		<section>
			<div className="nav-bar">
				<a
					href="https://github.com/AAsriyan"
					className="github-links"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="logo" src={Logo} alt="logo" />
				</a>
				<div className="nav">
					<a href="#home">HOME</a>
					<a href="#projects">PROJECTS</a>
					<a href="#contact">CONTACT</a>
				</div>
			</div>
		</section>
	);
};

export default NavBar;
