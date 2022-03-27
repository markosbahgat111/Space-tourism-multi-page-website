import { NavLink } from "react-router-dom";
import "./style.scss";

const CrewNavigation = () => {
	return (
		<div className="crew_nav_container">
			<ul>
				<li>
					<NavLink to="/crew/DouglasHurley" className={({ isActive }) => (isActive ? "active" : undefined)}>
						<i className="fa-solid fa-circle"></i>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/crew/MarkShuttleworth"
						className={({ isActive }) => (isActive ? "active" : undefined)}>
						<i className="fa-solid fa-circle"></i>
					</NavLink>
				</li>
				<li>
					<NavLink to="/crew/VictorGlover" className={({ isActive }) => (isActive ? "active" : undefined)}>
						<i className="fa-solid fa-circle"></i>
					</NavLink>
				</li>
				<li>
					<NavLink to="/crew/AnoushehAnsari" className={({ isActive }) => (isActive ? "active" : undefined)}>
						<i className="fa-solid fa-circle"></i>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default CrewNavigation;
