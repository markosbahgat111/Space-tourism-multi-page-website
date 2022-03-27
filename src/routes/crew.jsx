import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "styles/crew.scss";

const CREW = () => {
	const navigation = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === "/crew") navigation("/crew/DouglasHurley", { replace: true });
	}, [navigation, location.pathname]);
	return (
		<div className="Crew_content">
			<Outlet />
		</div>
	);
};

export default CREW;
