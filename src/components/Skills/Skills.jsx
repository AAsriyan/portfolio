import React from 'react';

import { ReactComponent as ReactLogo } from '../../logo.svg';
import NodeLogo from '../../assets/images/nodelogo.png';

import './Skills.scss';

const Skills = () => {
	return (
		<div className="skills">
			<div className="stack">
				<ReactLogo className="react-logo" />
				<h4>Front-end Developer</h4>
				<p>
					For client-side development, I love to build UI with the React
					ecosystem
				</p>
				<p className="p-title">Tech Stack:</p>
				<p>React | Redux | GraphQL </p>
				<p>Sass | Material UI | Firebase</p>
				<p className="p-title">Tools:</p>
				<p>VS Code | Axios | Moment</p>
				<p>Lodash | Babel | Webpack</p>
			</div>
			<div className="stack">
				<img src={NodeLogo} alt="Node JS Logo" className="node-logo" />
				<h4>Back-end Developer</h4>
				<p>
					For server-side, I love to build robust servers with the Express
					ecosystem
				</p>
				<p className="p-title">Tech Stack:</p>
				<p>Node | Express | GraphQL | PHP</p>
				<p>PostgreSQL | Slack | Golang </p>
				<p className="p-title">Tools:</p>
				<p>Nginx | Jest | Moment</p>
				<p>Knex | Bcrypt | Node Cron</p>
			</div>
		</div>
	);
};

export default Skills;
