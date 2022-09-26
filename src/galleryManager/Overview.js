import React, { Component } from "react";
import { Card, Button, Spinner } from "react-bootstrap";

// API req. handling modules
import { BASE_URL } from "../global";
const axios = require("axios");

class OverviewPanel extends Component {
	constructor(props) {
		super();

		this.state = {
			totalCategories: 0,
		};
	}

	render() {
		return (
			<div className="container m-0 px-1">
				<Card className="mb-2">
					<Card.Body className="m-0 p-1">
						<h6>Total Gallery</h6>
						<Button size="sm" block>
							{!this.state.totalCategories ? (
								<Spinner animation="border" size="sm" />
							) : (
								this.state.totalCategories
							)}
						</Button>
					</Card.Body>
				</Card>
			</div>
		);
	}

	componentDidMount() {
		// fetch counters
		let url = BASE_URL + "/executeQuery";
		// 1. total categories
		axios
			.post(url, {
				query: "SELECT COUNT(*) as total FROM gallery;",
			})
			.then((res) => {
				this.setState({ totalCategories: res.data[0].total });
			})
			.catch((err) => {
				console.log("counter error: ", err);
			});
	}
}

export default OverviewPanel;
