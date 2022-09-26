import React, { useState } from "react";

//styling modules
import { Button, Modal, Form, Row, Col, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPenAlt,
	faSave,
	faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";
import Swal from "sweetalert2";

//API handling components
import { BASE_URL } from "./../global";
const axios = require("axios");

function Update(props) {
	const [modal, setModal] = useState(false);
	const [file, setFile] = useState("");
	const [fileName, setFileName] = useState("Choose File");
	const [fLoading, setFLoading] = useState(false);

	const [imageUrl, setImageUrl] = useState("");

	let touchedProps = {}; // to store modified values for this record

	function onHandle() {
		setModal(!modal);
	}

	function handleChange(event) {
		// collect all modified values into touchedProps
		touchedProps[event.target.name] = event.target.value;
		console.log(touchedProps);
	}
	const fileUpload = () => {
		//uploadfile
		setFLoading(true);
		const formData = new FormData();
		formData.append("file", file);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setImageUrl(res.data.filePath);
				setFLoading(false);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
				setFLoading(false);
			});
	};

	function handleSubmit(event) {
		if (Object.keys(touchedProps).length < 1 && imageUrl === "") {
			// simply return back because there is no any modification happened in record
			return;
		}

		// process modified data
		let params = "";
		for (let key in touchedProps) {
			params += key + '="' + touchedProps[key] + '", ';
		}
		if (imageUrl !== "") {
			params = params + ` imageUrl="${imageUrl}"`;
		}
		// remove excessive comma
		if (imageUrl === "") {
			params = params.slice(0, -2);
		}

		// form query
		let query = "UPDATE news SET ";
		query = query + params + " WHERE newsId=" + props.news.newsId;
		console.log(query);
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
				props.newsStateUpdater();
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
	const {
		newsId,
		title,
		description,
		status,
		categoryName,
		sourceName,
	} = props.news;
	return (
		<div>
			<Button onClick={onHandle} variant="outline-info btn-sm" className="mx-1">
				<FontAwesomeIcon icon={faPenAlt} />
			</Button>
			<Modal
				show={modal}
				onHide={onHandle}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Update News
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{description === "banner" ? (
						<div>
							<Row>
								<Col>
									<Form.Group>
										<Form.Label>Banner ID</Form.Label>
										<Form.Control type="text" value={newsId} readOnly />
									</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="exampleForm.ControlSelect1">
										<Form.Label>Status</Form.Label>
										<Form.Control
											as="select"
											defaultValue={status}
											name="status"
											onChange={handleChange}
										>
											<option value="0">Removed</option>
											<option value="1">Published</option>
											<option value="2">Drafted</option>
											<option value="4">Advertise_Notification</option>
											<option value="5">Notification_1</option>
											<option value="6">Notification_2</option>
											
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
					) : (
						<div>
							<Row>
								<Col>
									<Form.Group>
										<Form.Label>News ID</Form.Label>
										<Form.Control type="text" value={newsId} readOnly />
									</Form.Group>
								</Col>
								<Col>
									<Form.Group>
										<Form.Label>Category</Form.Label>
										<Form.Control type="text" value={categoryName} readOnly />
									</Form.Group>
								</Col>

								<Col>
									<Form.Group controlId="exampleForm.ControlSelect1">
										<Form.Label>Status</Form.Label>
										<Form.Control
											as="select"
											defaultValue={status}
											name="status"
											onChange={handleChange}
										>
											<option value="0">Removed</option>
											<option value="1">Published</option>
											<option value="2">Drafted</option>
											<option value="4">Advertise_Notification</option>
											<option value="5">Notification_1</option>
											<option value="6">Notification_2</option>
										</Form.Control>
									</Form.Group>
								</Col>
							</Row>

							<Row>
								<Col>
									<Form.Group>
										<Form.Label>Title</Form.Label>
										<Form.Control
											type="text"
											defaultValue={title}
											name="title"
											onChange={handleChange}
											maxLength="75"
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group>
										<Form.Label>Description</Form.Label>
										<Form.Control
											as="textarea"
											rows="5"
											defaultValue={description}
											name="description"
											onChange={handleChange}
											maxLength="400"
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group>
										<Form.Label>Source Name</Form.Label>
										<Form.Control
											type="text"
											name="sourceName"
											defaultValue={sourceName}
											onChange={handleChange}
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row
								className="border mx-0 mb-3 py-2"
								style={{ borderRadius: "5px" }}
							>
								<Col md={8}>
									<Form.Group>
										<Form.Label>Change Image</Form.Label>
										<Form.File
											id="custom-file"
											label={fileName}
											custom
											required
											onChange={(e) => {
												setFile(e.target.files[0]);
												setFileName(e.target.files[0].name);
											}}
										/>
									</Form.Group>
								</Col>

								<Col md={2}>
									<Form.Group className="mt-4 pt-2">
										<Button
											variant={
												imageUrl === ""
													? "primary btn-block"
													: "success btn-block"
											}
											disabled={file === "" ? true : false}
											onClick={() => fileUpload()}
										>
											{fLoading ? (
												<Spinner animation="border" size="sm" />
											) : imageUrl === "" ? (
												"Upload"
											) : (
												<FontAwesomeIcon icon={faCheckCircle} />
											)}
										</Button>
									</Form.Group>
								</Col>
								<Col md={2}>
									<Form.Group className="mt-4 pt-2">
										<Button
											variant="danger btn-block"
											disabled={file === "" ? true : false}
											onClick={() => {
												setImageUrl("");
												setFile("");
												setFileName("Choose File");
											}}
										>
											Clear
										</Button>
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
					)}
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Update;
