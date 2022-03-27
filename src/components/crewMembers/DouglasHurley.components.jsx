import DouglasHurley_Pic from "assets/crew/image-douglas-hurley.png";
import CrewNavigation from "./navigation/navigation.component";
import "./style.scss";
import { useMediaQuery } from "react-responsive";

const DouglasHurley = ({ data }) => {
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
				<img src={DouglasHurley_Pic} alt="AnoushehAsari" />
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

export default DouglasHurley;