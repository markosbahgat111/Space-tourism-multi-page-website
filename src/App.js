import { Route, Routes } from "react-router-dom";
import CREW from "routes/crew";
import Technology from "routes/technology";
import HOME from "routes/home";
import DESTINATION from "routes/destination";
import EUROPA from "components/destinationContent/europa/europa.component";
import MARS from "components/destinationContent/mars/mars.component";
import MOON from "components/destinationContent/moon/moon.component";
import TITAN from "components/destinationContent/titan/titan.component";
import data from "./mydata.json";
import AnoushehAsari from "components/crewMembers/AnoushehAnsari.components";
import VictorGlover from "components/crewMembers/VictorGlover.components";
import MarkShuttleworth from "components/crewMembers/MarkShuttleworth.components";
import DouglasHurley from "components/crewMembers/DouglasHurley.components";
import SpaceCapsule from "components/technologyStack/Spacecapsule.components";
import Spaceport from "components/technologyStack/Spaceport.components";
import LaunchVehicle from "components/technologyStack/Launchvehicle.components";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/crew" element={<CREW />}>
					<Route path="DouglasHurley" element={<DouglasHurley data={data.crew[0]} />} />
					<Route path="MarkShuttleworth" element={<MarkShuttleworth data={data.crew[1]} />} />
					<Route path="VictorGlover" element={<VictorGlover data={data.crew[2]} />} />
					<Route path="AnoushehAnsari" element={<AnoushehAsari data={data.crew[3]} />} />
				</Route>

				<Route path="/technology" element={<Technology />}>
					<Route path="Spacecapsule" element={<SpaceCapsule data={data.technology[2]} />} />
					<Route path="Spaceport" element={<Spaceport data={data.technology[1]} />} />
					<Route path="Launchvehicle" element={<LaunchVehicle data={data.technology[0]} />} />
				</Route>

				<Route path="/" element={<HOME />} exact />

				<Route path="/destination" element={<DESTINATION />}>
					<Route path="moon" element={<MOON data={data.destinations[0]} />} />
					<Route path="mars" element={<MARS data={data.destinations[1]} />} />
					<Route path="europa" element={<EUROPA data={data.destinations[2]} />} />
					<Route path="titan" element={<TITAN data={data.destinations[3]} />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
