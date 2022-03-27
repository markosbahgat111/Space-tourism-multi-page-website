import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "styles/destination.scss";

const DESTINATION = () => {
	const navigation = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === "/destination") navigation("/destination/moon", { replace: true });
	}, [navigation, location.pathname]);
	return (
		<div className="Destination_content">
			<Outlet />
		</div>
	);
};

export default DESTINATION;
