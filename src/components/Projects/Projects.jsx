import React from 'react';

import Project from '../Project/Project.jsx';

import './Projects.scss';

const Projects = () => {
	return (
		<section className="portfolio" id="projects">
			<h3 className="title">Projects</h3>
			<Project />
		</section>
	);
};

export default Projects;
