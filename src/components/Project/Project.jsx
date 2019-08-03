import React from 'react';

import StandupImage from '../../assets/images/rocket-small.png';
import CrownLogo from '../../assets/images/crownlogo.jpg';
import DroomLogo from '../../assets/images/droomlogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Project.scss';

const Project = () => {
	return (
		<div className="projects">
			<div className="single-project">
				<div className="project-text">
					<h3>Slack Standup</h3>
					<p>React | Express | PostgreSQL</p>
					<p>Firebase Auth | Slack API | Material UI</p>
					<p className="project-desc">
						A slackbot app that lets managers run daily standup reports
						asynchronously to help maximize efficiency and allow team members to
						submit reports any time during the day.
					</p>
					<a
						href="https://stand-em-ups.netlify.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button>View Project</button>
					</a>
					<div>
						<FontAwesomeIcon icon={faGithub} className="github-logo" />
						<a
							href="https://github.com/AAsriyan/labs12-slack-standup-FE"
							target="_blank"
							className="github-links"
							rel="noopener noreferrer"
						>
							Frontend
						</a>{' '}
						|{' '}
						<a
							href="https://github.com/AAsriyan/labs12-slack-standup-BE"
							className="github-links"
							target="_blank"
							rel="noopener noreferrer"
						>
							Backend
						</a>
					</div>
				</div>
				<div className="project-image">
					<img src={StandupImage} alt="" />
				</div>
			</div>
			<div className="single-project crown">
				<div className="project-image">
					<img src={CrownLogo} alt="crown logo" />
				</div>
				<div className="project-text">
					<h3>Crown Clothing</h3>
					<p>React | Hooks | Redux | GraphQL</p>
					<p>Firebase | SASS | Stripe</p>
					<p className="project-desc">
						An E-Commerce Clothing application that allows the user to search
						through the merchandise, add items to cart, and checkout using
						Stripe.
					</p>
					<a
						href="https://crown-live.netlify.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="crown-btn">View Project</button>
					</a>
					<div>
						<FontAwesomeIcon icon={faGithub} className="github-logo" />
						<a
							href="https://github.com/AAsriyan/crown-clothing"
							target="_blank"
							rel="noopener noreferrer"
							className="github-links"
						>
							Frontend
						</a>
					</div>
				</div>
			</div>
			<div className="single-project">
				<div className="project-text">
					<h3>Droom</h3>
					<p>Node | Express | PostgreSQL | Bcrypt</p>
					<p>SentryIO | jsonwebtoken | Knex </p>
					<p className="project-desc">
						A job matching application for job seekers and companies alike. It
						is as if LinkedIn and Tinder had a child. Swipe right to match with
						your dream company!
					</p>
					<a
						href="https://github.com/AAsriyan/buildWeek4_15_19-Droom-BE"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="droom-btn">
							<FontAwesomeIcon icon={faGithub} className="github-logo" />
							<span>View Backend</span>
						</button>
					</a>
					{/* <div>
						<FontAwesomeIcon icon={faGithub} className="github-logo" />
						<a
							href="https://github.com/AAsriyan/buildWeek4_15_19-Droom-BE"
							className="github-links"
							target="_blank"
							rel="noopener noreferrer"
						>
							Backend
						</a>
					</div> */}
				</div>
				<div className="project-image droom">
					<img src={DroomLogo} alt="" className="droom-img" />
				</div>
			</div>
		</div>
	);
};

export default Project;
