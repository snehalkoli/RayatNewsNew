import React, { useState } from "react";

//styling modules
import { Button, Modal, Form, Row, Col, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSave } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

//API handling components
import { BASE_URL } from "./../global";
const axios = require("axios");

function Add(props) {
	const [modal, setModal] = useState(false);
	const [userName, setUserName] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [userRole, setUserRole] = useState(1);
	const [loading, setLoading] = useState(false);

	function onHandle() {
		setModal(!modal);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);
		//form query
		let query = `INSERT INTO admin (name,userName,password,userRole) VALUES("${name}","${userName}","${password}",${userRole})`;
		//send HTTP request to API
		let url = BASE_URL + "/executeQuery";
		let data = {
			crossDomain: true,
			crossOrigin: true,
			query: query,
		};
		axios
			.post(url, data)
			.then((res) => {
				Swal.fire({
					icon: "success",
					title: "User Added successfully",
					showCloseButton: true,
				});
				props.userStateUpdater();
				setModal(false);
				setLoading(false);
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to add user",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
				setLoading(false);
			});
	}
	return (
		<div>
			<Button
				onClick={onHandle}
				variant="info btn-sm"
				className="mx-0"
				disabled={props.currentUserRole === "0" ? false : true}
			>
				<FontAwesomeIcon icon={faPlusCircle} /> Add User
			</Button>
			<Modal
				show={modal}
				onHide={onHandle}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Add User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<Row>
							<Col>
								<Form.Group>
									<Form.Label>User Role</Form.Label>
									<Form.Control
										as="select"
										value={userRole}
										required
										onChange={(e) => setUserRole(e.target.value)}
									>
										<option value="1">Normal User</option>
										<option value="0">Admin User</option>
									</Form.Control>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										value={userName}
										placeholder="Enter email here"
										required
										onChange={(e) => setUserName(e.target.value)}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group>
									<Form.Label>Publisher Name</Form.Label>
									<Form.Control
										type="text"
										value={name}
										placeholder="Enter publisher name here"
										required
										onChange={(e) => setName(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										value={password}
										placeholder="Enter password here"
										required
										onChange={(e) => setPassword(e.target.value)}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Button variant="primary btn-block mt-2" type="submit">
							{loading ? (
								<Spinner animation="border" size="sm" />
							) : (
								<>
									<FontAwesomeIcon icon={faSave} /> Save
								</>
							)}
						</Button>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Add;
