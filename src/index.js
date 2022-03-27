import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import Layout from "./components/layout/layout.components";
import "@fortawesome/fontawesome-free/css/all.css";

import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
	<BrowserRouter>
		<Layout>
			<App />
		</Layout>
	</BrowserRouter>,
	document.getElementById("root")
);
