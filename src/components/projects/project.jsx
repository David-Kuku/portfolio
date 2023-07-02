import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, github } = props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-logo">
						<img src={logo} alt="logo" style={{ height: '50px', width: '100px' }} />
					</div>
					<div className="project-title">{title}</div>
					<div style={{ overflow: 'hidden' }}>
						<div className="project-description">{description}</div>
					</div>
					<div className="project-link">
						<Link to={link}>
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
								<div className="project-link-text">{linkText}</div>
							</div>
						</Link>

						{
							github &&
							<Link to={github}>
								<FontAwesomeIcon icon={faGithub} className="github" />
							</Link>
						}

					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
