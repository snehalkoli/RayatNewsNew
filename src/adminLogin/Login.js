import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { ToastContainer, toast } from "react-toastify";
import LinearProgress from "@material-ui/core/LinearProgress";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";

//API handling components
import { BASE_URL } from "./../global";
import { Card } from "@material-ui/core";
import cookie from "js-cookie";
const axios = require("axios");

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userRole, setUserRole] = useState("");
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e) => {
		setIsLoading(true);
		e.preventDefault();
		let url = BASE_URL + "/executeQuery";
		const query = `SELECT * from admin where userName="${email}" and password="${password}" and userStatus=1;`;

		let data = {
			crossDomain: true,
			crossOrigin: true,
			query: query,
		};
		axios
			.post(url, data)
			.then((res) => {
				if (res.data.length > 0) {
					setUserRole(res.data[0].userRole);
					cookie.set("publisher", res.data[0].name);
					setTimeout(() => {
						setIsAuthenticated(true);
					}, 2000);
				} else {
					setIsLoading(false);
					toast("Incorrect username and password");
				}
			})
			.catch((err) => console.log(err));
	};
	const redirect = () => {
		if (isAuthenticated) {
			return (
				<Redirect
					to={{
						pathname: "/newsManager",
						state: {
							email: email,
							userRole: userRole,
						},
					}}
				/>
			);
		}
	};

	return (
		<div className="main">
			{redirect()}
			<h3 className="heading pb-4">RAYAT NEWS ADMIN PANEL</h3>
			<Card
				className="pt-5 pb-5 pl-3 pr-3 login-temp"
				style={{ boxShadow: "0px 0px 30px 0px rgba(30, 23, 16, 0.2)" }}
			>
				<div className="text-center mb-3">
					<FontAwesomeIcon
						size="3x"
						className="mb-2"
						icon={faUser}
					></FontAwesomeIcon>
					<h5 className="sub-head">Admin Login</h5>
				</div>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter username here"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							style={{ fontSize: "15px" }}
							required
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter your password here"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							style={{ fontSize: "15px" }}
							required
						/>
					</Form.Group>
					<Button variant="primary btn-block" type="submit">
						Log In
					</Button>
				</Form>
				{isLoading ? <LinearProgress color="secondary" /> : null}
			</Card>
			<span style={{ color: "#fff", marginTop: "10px" }}>
				Powered by 5TechG Team
			</span>
			<ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={8000} />
		</div>
	);
}

export default Login;
