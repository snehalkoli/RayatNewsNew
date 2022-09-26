import React from "react";

//styling modules
import { Card, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//API handling components
import { BASE_URL } from "./../global";
const axios = require("axios");

export default function Overview() {
	const [totalUsers, setTotalUsers] = React.useState(null);
	const [activeUsers, setActiveUsers] = React.useState(null);
	const [adminUsers, setAdminUsers] = React.useState(null);
	let url = BASE_URL + "/executeQuery";
	let data = [
		{
			crossDomain: true,
			crossOrigin: true,
			query: "SELECT count(id) AS totalUsers FROM admin;",
		},
		{
			crossDomain: true,
			crossOrigin: true,
			query: "SELECT count(id) AS totalActive FROM admin WHERE userStatus=1;",
		},
		{
			crossDomain: true,
			crossOrigin: true,
			query: "SELECT count(id) AS totalAdmin FROM admin WHERE userRole=0;",
		},
	];
	axios
		.post(url, data[0])
		.then((res) => {
			setTotalUsers(res.data[0].totalUsers);
		})
		.catch((err) => console.log(err));
	axios
		.post(url, data[1])
		.then((res) => {
			setActiveUsers(res.data[0].totalActive);
		})
		.catch((err) => console.log(err));
	axios
		.post(url, data[2])
		.then((res) => {
			setAdminUsers(res.data[0].totalAdmin);
		})
		.catch((err) => console.log(err));

	return (
		<div className="container py-0 pl-1 pr-0" style={{ borderRadius: "5px" }}>
			<Card className="m-0 p-1">
				<Card.Body className="m-0 p-1">
					<h6>Total Users</h6>
					<Button variant="info" size="sm" block>
						{totalUsers === null ? (
							<Spinner animation="border" size="sm" />
						) : (
							totalUsers
						)}
					</Button>
				</Card.Body>
			</Card>
			<Card className="my-0 p-1 mt-1">
				<Card.Body className="m-0 p-1">
					<h6>Active Users</h6>
					<Button size="sm" block>
						{!activeUsers ? (
							<Spinner animation="border" size="sm" />
						) : (
							activeUsers
						)}
					</Button>
				</Card.Body>
			</Card>
			<Card className="my-0 p-1 mt-1">
				<Card.Body className="m-0 p-1">
					<h6>Admin Users</h6>
					<Button variant="warning" size="sm" block>
						{!adminUsers ? (
							<Spinner animation="border" size="sm" />
						) : (
							adminUsers
						)}
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}
