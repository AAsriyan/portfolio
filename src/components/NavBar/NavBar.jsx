import React from 'react';

import Logo from '../../assets/images/logo2.png';

import './NavBar.scss';

const NavBar = () => {
	return (
		<section>
			<div className="nav-bar">
				<img className="logo" src={Logo} alt="logo" />
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
