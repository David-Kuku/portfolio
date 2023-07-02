import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import sterling from '../../assets/sterling.png'
import punch from '../../assets/punch.png'
import noImage from '../../assets/noImage.jpg'
import "./styles/works.css";

const Works = () => {
	return (
		
			<div className="works">
				<Card
					icon={faBriefcase}
					title="Experience"
					body={
						<div className="works-body">
							<div className="work">
								<div>
									<div style={{display: 'flex', gap: '15px'}}>
										<img
											src={sterling}
											alt="sterling"
											className="work-image"
										/>
										<div>
											<div className="work-title">Sterling Bank Plc</div>
											<div className="work-subtitle">
												Frontend react developer
											</div>
										</div>
									</div>
								</div>
								<div className="work-duration">2022 - Present</div>
							</div>

							<div className="work">
								<div>
									<div style={{display: 'flex', gap: '15px'}}>
										<img
											src={punch}
											alt="punch llc"
											className="work-image"
										/>
										<div>
											<div className="work-title">Punch LLC</div>
											<div className="work-subtitle">
												Software Engineer (MERN Stack)
											</div>
										</div>
									</div>
								</div>
								<div className="work-duration">2022 - 2023</div>
							</div>

							<div className="work">
								<div>
									<div style={{display: 'flex', gap: '15px'}}>
										<img
											src={noImage}
											alt="punch llc"
											className="work-image"
										/>
										<div>
											<div className="work-title">Flatmates.ng</div>
											<div className="work-subtitle">
												Frontend Developer
											</div>
										</div>
									</div>
								</div>
								<div className="work-duration">2021 - 2022</div>
							</div>
						</div>
						
					}
				/>
			</div>
	);
};

export default Works;
