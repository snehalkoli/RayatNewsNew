import React, { useState } from "react";

//styling modules
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt, faSave } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

//API handling components
import { BASE_URL } from "./../global";
const axios = require("axios");

function Update(props) {
	const [modal, setModal] = useState(false);

	let touchedProps = {}; // to store modified values for this record

	function onHandle() {
		setModal(!modal);
	}

	function handleChange(event) {
		// collect all modified values into touchedProps
		touchedProps[event.target.name] = event.target.value;
		console.log(touchedProps);
	}

	function handleSubmit(event) {
		if (Object.keys(touchedProps).length < 1) {
			// simply return back because there is no any modification happened in record
			return;
		}

		// process modified data
		let params = "";
		for (let key in touchedProps) {
			params += key + '="' + touchedProps[key] + '", ';
		}
		// remove excessive comma
		params = params.slice(0, -2);

		// form query
		let query = "UPDATE admin SET ";
		query = query + params + " WHERE id=" + props.user.id;
		// send HTTP request to API
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
					title: "News updated successfully",
					showCloseButton: true,
				});
				props.userStateUpdater();
				setModal(false);
			})
			.catch((err) => {
				Swal.fire({
					title: "Record failed to update !",
					html: "<p> error: " + err + "</p> ",
					showCloseButton: true,
				});
			});
	}
	const { id, name, userName, password, userStatus, userRole } = props.user;
	return (
		<div>
			<Button
				onClick={onHandle}
				variant="info btn-sm btn-block"
				disabled={
					props.currentUserRole === "0"
						? false
						: props.currentUser !== userName
						? true
						: false
				}
			>
				<FontAwesomeIcon icon={faPenAlt} />
			</Button>
			<Modal
				show={modal}
				onHide={onHandle}
				size="md"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Update User
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<Row>
							<Col>
								<Form.Group>
									<Form.Label>User ID</Form.Label>
									<Form.Control type="text" value={id} readOnly />
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group>
									<Form.Label>Publisher Name</Form.Label>
									<Form.Control
										type="text"
										defaultValue={name}
										name="name"
										onChange={handleChange}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="text"
										defaultValue={userName}
										name="userName"
										onChange={handleChange}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="text"
										defaultValue={password}
										name="password"
										onChange={handleChange}
									/>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col>
								<Form.Group controlId="exampleForm.ControlSelect1">
									<Form.Label>User Role</Form.Label>
									<Form.Control
										as="select"
										defaultValue={userRole}
										name="userRole"
										onChange={handleChange}
										disabled={props.currentUserRole === "0" ? false : true}
									>
										<option value="0">Admin User</option>
										<option value="1">Normal User</option>
									</Form.Control>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="exampleForm.ControlSelect1">
									<Form.Label>User Status</Form.Label>
									<Form.Control
										as="select"
										defaultValue={userStatus}
										name="userStatus"
										onChange={handleChange}
										disabled={props.currentUserRole === "0" ? false : true}
									>
										<option value="0">Disabled</option>
										<option value="1">Enabled</option>
									</Form.Control>
								</Form.Group>
							</Col>
						</Row>
						<Button
							variant="primary btn-sm"
							style={{ float: "right" }}
							onClick={handleSubmit}
						>
							<FontAwesomeIcon icon={faSave} /> Save
						</Button>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Update;
