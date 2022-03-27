import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "styles/tech.scss";

const Technology = () => {
	const navigation = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === "/technology") navigation("/technology/Launchvehicle", { replace: true });
	}, [navigation, location.pathname]);
	return (
		<div className="Tech_content">
			<Outlet />
		</div>
	);
};

export default Technology;
