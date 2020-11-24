import React from "react";
import Light from "./Light.jsx";

//create your first component
export function Home() {
	return (
		<div className="Frist-container">
			<h1>Traffic Light with React</h1>
			<Light />
		</div>
	);
}
