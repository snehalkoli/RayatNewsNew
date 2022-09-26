import React from "react";

//styling modules
import moment from "moment";
import { Card, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//API handling components
import { BASE_URL } from "./../global";
const axios = require("axios");

export default function Overview() {
	const [totalNews, setTotalNews] = React.useState(null);
	const [todaysNews, setTodaysNews] = React.useState(null);
	let url = BASE_URL + "/executeQuery";
	let data = [
		{
			crossDomain: true,
			crossOrigin: true,
			query: "SELECT count(newsId) AS totalNews FROM news;",
		},
		{
			crossDomain: true,
			crossOrigin: true,
			query: `SELECT count(newsId) AS todaysNews FROM news where date like '${moment(
				new Date()
			).format("YYYY-MM-DD")}%';`,
		},
	];
	axios
		.post(url, data[0])
		.then((res) => {
			setTotalNews(res.data[0].totalNews);
		})
		.catch((err) => console.log(err));
	axios
		.post(url, data[1])
		.then((res) => {
			setTodaysNews(res.data[0].todaysNews);
		})
		.catch((err) => console.log(err));

	return (
		<div className="container py-0 pl-1 pr-0" style={{ borderRadius: "5px" }}>
			<Card className="m-0 p-1">
				<Card.Body className="m-0 p-1">
					<h6>Today's Total News</h6>
					<Button variant="info" size="sm" block>
						{todaysNews === null ? (
							<Spinner animation="border" size="sm" />
						) : (
							todaysNews
						)}
					</Button>
				</Card.Body>
			</Card>
			<Card className="my-0 p-1 mt-1">
				<Card.Body className="m-0 p-1">
					<h6>Total News Posted</h6>
					<Button size="sm" block>
						{!totalNews ? <Spinner animation="border" size="sm" /> : totalNews}
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}
