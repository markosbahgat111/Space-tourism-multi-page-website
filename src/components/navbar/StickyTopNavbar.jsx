import "./style.scss";
import logo from "assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import iconHumburger from "assets/shared/icon-hamburger.svg";
import closeIcon from "assets/shared/icon-close.svg";

const StickyTopNavbar = () => {
	const handleShowNavbar = () => {
		const menu = document.querySelector(".menu_list");
		const menuBtn = document.querySelector(".menu_btn");
		menu.classList.forEach((item) => {
			if (item === "active") {
				menu.classList.remove("active");
				menuBtn.classList.remove("hide");
			} else {
				menu.classList.add("active");
				menuBtn.classList.add("hide");
			}
		});
	};
	return (
		<nav className="navbar">
			<div className="content">
				<div className="logo">
					<NavLink to="/home">
						<img src={logo} alt="logo" />
					</NavLink>
				</div>
				<ul className="menu_list">
					<div className="icon cancel_btn" onClick={handleShowNavbar}>
						<img src={closeIcon} alt="icon" />
					</div>

					<li onClick={handleShowNavbar}>
						<NavLink to="/home" className={({ isActive }) => (isActive ? "active" : undefined)}>
							00 Home
						</NavLink>
					</li>

					<li onClick={handleShowNavbar}>
						<NavLink to="/destination" className={({ isActive }) => (isActive ? "active" : undefined)}>
							01 Destination
						</NavLink>
					</li>

					<li onClick={handleShowNavbar}>
						<NavLink to="/crew" className={({ isActive }) => (isActive ? "active" : undefined)}>
							02 Crew
						</NavLink>
					</li>

					<li onClick={handleShowNavbar}>
						<NavLink to="/technology" className={({ isActive }) => (isActive ? "active" : undefined)}>
							03 Technology
						</NavLink>
					</li>
				</ul>
				<div className="icon menu_btn" onClick={handleShowNavbar}>
					<img src={iconHumburger} alt="icon" />
				</div>
			</div>
		</nav>
	);
};

export default StickyTopNavbar;
