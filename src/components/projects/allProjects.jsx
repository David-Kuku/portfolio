import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div>
			<p className="header">PROJECTS</p>
			<div className="all-projects-container">
				{INFO.projects.map((project, index) => (
					<div className="all-projects-project" key={index}>
						<Project
							logo={project.logo}
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={project.link}
							github = {project.githubLink}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllProjects;
