import TechNavigation from "./technologyNavigation/techNavigation.components";
import Spaceport_Pic_landscape from "assets/technology/image-spaceport-landscape.jpg";
import Spaceport_Pic_portrait from "assets/technology/image-spaceport-portrait.jpg";
import "./style.scss";
import { useMediaQuery } from "react-responsive";

const Spaceport = ({ data }) => {
	const isDesktop = useMediaQuery({ minWidth: 1224 });
	return (
		<div className="main_tech_container">
			{!isDesktop && (
				<div className="header_container">
					<h3>
						<span>02</span> MEET YOUR CREW
					</h3>
				</div>
			)}
			<div className="tech_img_container">
				<img src={isDesktop ? Spaceport_Pic_portrait : Spaceport_Pic_landscape} alt="AnoushehAsari" />
			</div>
			<section>
				{isDesktop && (
					<div className="header_container">
						<h3>
							<span>02</span> MEET YOUR CREW
						</h3>
					</div>
				)}
				<div className="nav_cont">
					<TechNavigation />
				</div>
				<div className="tech_content_container">
					<span>THE TERMINOLOGY ...</span>
					<h1>{data.name}</h1>
					<p>{data.description}</p>
				</div>
			</section>
		</div>
	);
};

export default Spaceport;
