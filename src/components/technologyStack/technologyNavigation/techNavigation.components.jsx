import { NavLink } from "react-router-dom";
import "./style.scss";

const TechNavigation = () => {
	return (
		<div className="tech_nav_container">
			<ul>
				<li>
					<NavLink to="/technology/LaunchVehicle">1</NavLink>
				</li>
				<li>
					<NavLink to="/technology/Spaceport">2</NavLink>
				</li>
				<li>
					<NavLink to="/technology/SpaceCapsule">3</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default TechNavigation;
