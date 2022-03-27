import CrewNavigation from "./navigation/navigation.component";
import "./style.scss";
import MarkShuttleworth_Pic from "assets/crew/image-mark-shuttleworth.png";
import { useMediaQuery } from "react-responsive";

const MarkShuttleworth = ({ data }) => {
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
	return (
		<div className="main_person_container">
			{isTabletOrMobile && (
				<div className="header_container">
					<h3>
						<span>02</span> MEET YOUR CREW
					</h3>
				</div>
			)}
			<div className="person_img_container">
				<img src={MarkShuttleworth_Pic} alt="AnoushehAsari" />
				<hr />
			</div>
			<section>
				{!isTabletOrMobile && (
					<div className="header_container">
						<h3>
							<span>02</span> MEET YOUR CREW
						</h3>
					</div>
				)}
				<div className="nav_cont">
					<CrewNavigation />
				</div>
				<div className="crew_content_container">
					<span>{data.role}</span>
					<h1>{data.name}</h1>
					<p>{data.bio}</p>
				</div>
			</section>
		</div>
	);
};

export default MarkShuttleworth;
