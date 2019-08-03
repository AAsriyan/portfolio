import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import { ReactComponent as DeveloperSVG } from '../../assets/images/developer.svg';
import { ReactComponent as DeskSVG } from '../../assets/images/desk.svg';

import './TopIntro.scss';

const TopIntro = () => {
	return (
		<div className="top-intro">
			<NavBar />
			<h1>
				Hello, my name is <br />
				<span>Arshak Asriyan</span>
			</h1>
			<div className="intro">
				<div className="intro-text">
					<h2>Full Stack Web Engineer</h2>
					<p>
						I am a passionate developer that loves building apps that bring
						value to the end user.
					</p>
					<div className="intro-buttons">
						<a href="#projects">
							<button className="portfolio-btn">Projects</button>
						</a>
						<a href="#contact">
							<button className="contact-btn">Contact Me</button>
						</a>
					</div>
				</div>
				<div className="intro-image">
					<DeveloperSVG />
				</div>
			</div>
			<DeskSVG className="desk" />
		</div>
	);
};

export default TopIntro;
