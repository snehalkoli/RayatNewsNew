import React from "react";
import "react-bootstrap";

function TitleBar() {
	return (
		<div className="w-100 mt-1 pb-2">
			<h5>
				<small>
					<span className="text-muted">Dashboard /</span>{" "}
					<span style={{ color: "rgb(95, 95, 240)" }}>News Manager</span>
				</small>
			</h5>
		</div>
	);
}

export default TitleBar;
