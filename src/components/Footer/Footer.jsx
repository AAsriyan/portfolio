import React from 'react';

import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faGithub,
	faLinkedin,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';

import FooterBg from '../../assets/images/footer-bg.png';

const Footer = () => {
	return (
		<div className="footer">
			<h2 className="title">Want to see more?</h2>
			<div className="social">
				<div className="icon">
					<FontAwesomeIcon icon={faGithub} />
				</div>
				<div className="icon">
					<FontAwesomeIcon icon={faLinkedin} />
				</div>
				<div className="icon">
					<FontAwesomeIcon icon={faTwitter} />
				</div>
			</div>
		</div>
	);
};

export default Footer;
