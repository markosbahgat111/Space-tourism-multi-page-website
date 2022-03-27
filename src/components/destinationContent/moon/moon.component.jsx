import moon from "assets/destination/image-moon.png";
import Navigation from "../navigation/navigation.component";
import "../style.scss";

const MOON = ({ data }) => {
	console.log(data);
	return (
		<div className="container">
			<div className="planet_container">
				<h3>
					<span>01 </span>
					PICK YOUR DESTINATION
				</h3>
				<div>
					<img src={moon} alt="moonPicture" />
				</div>
			</div>
			<div className="main_content_container">
				<div className="content_description_container">
					<div>
						<Navigation />
					</div>
					<h1>{data.name}</h1>
					<p>{data.description}</p>
				</div>
				<div>
					<hr />
				</div>
				<div className="measurments_container">
					<section>
						<span>AVG. DISTANCE</span>
						<h4>{data.distance}</h4>
					</section>
					<section>
						<span>EST. TRAVEL TIME</span>
						<h4>{data.travel}</h4>
					</section>
				</div>
			</div>
		</div>
	);
};

export default MOON;
