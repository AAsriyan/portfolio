import React from 'react';

import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faGithub,
	faLinkedin,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';

import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<div className="footer">
			<h2 className="title">Want to see more?</h2>
			<div className="up">
				<a href="#home">
					<FontAwesomeIcon className="return" icon={faAngleDoubleUp} />
				</a>
			</div>
			<div className="social">
				<div className="icon">
					<a
						href="https://github.com/AAsriyan"
						className="github-links"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>
				<div className="icon">
					<a
						href="https://linkedin.com/in/aasriyan"
						className="github-links"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</div>
				<div className="icon">
					<a
						href="https://twitter.com/aasriyan0"
						className="github-links"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
