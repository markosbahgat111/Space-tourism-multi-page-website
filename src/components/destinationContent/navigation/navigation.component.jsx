import { NavLink } from "react-router-dom";
import "./style.scss";

const Navigation = () => {
	return (
		<div className="navigation_container">
			<ul>
				<li>
					<NavLink to="/destination/moon" className={({ isActive }) => (isActive ? "active" : undefined)}>
						MOON
					</NavLink>
				</li>
				<li>
					<NavLink to="/destination/mars" className={({ isActive }) => (isActive ? "active" : undefined)}>
						MARS
					</NavLink>
				</li>
				<li>
					<NavLink to="/destination/europa" className={({ isActive }) => (isActive ? "active" : undefined)}>
						EUROPA
					</NavLink>
				</li>
				<li>
					<NavLink to="/destination/titan" className={({ isActive }) => (isActive ? "active" : undefined)}>
						TITAN
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
