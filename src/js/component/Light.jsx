import React, { useState, useEffect } from "react";
import "../../styles/Light.css";

function Light() {
	const [active1, setactive1] = useState(" ");
	const [active2, setactive2] = useState(" ");
	const [active3, setactive3] = useState(" ");

	///function OnLight (event)
	const OnLight = event => {
		if (event.target.classList.contains("red")) {
			setactive1("selected");
			setactive2(" ");
			setactive3(" ");
		} else if (event.target.classList.contains("yellow")) {
			setactive2("selected");
			setactive1(" ");
			setactive3(" ");
		} else if (event.target.classList.contains("green")) {
			setactive3("selected");
			setactive2(" ");
			setactive1(" ");
		}
	};
	return (
		<div className="First-container traffic">
			<div
				id="red"
				className={"red " + active1}
				onClick={event => {
					OnLight(event);
				}}
			/>
			<div
				id="yellow"
				className={"yellow " + active2}
				onClick={event => {
					OnLight(event);
				}}
			/>
			<div
				id="green"
				className={"green " + active3}
				onClick={event => {
					OnLight(event);
				}}
			/>
		</div>
	);
}

export default Light;
