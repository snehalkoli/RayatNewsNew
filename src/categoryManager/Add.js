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
	const [category, setCategory] = useState("");
	const [loading, setLoading] = useState(false);

	function onHandle() {
		setModal(!modal);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);
		//form query
		let query = `INSERT INTO category (categoryName) VALUES("${category}")`;
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
					title: "Category Added successfully",
					showCloseButton: true,
				});
				props.categoryStateUpdater();
				setModal(false);
				setLoading(false);
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to add category",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
				setLoading(false);
			});
	}
	return (
		<div>
			<Button onClick={onHandle} variant="info btn-sm" className="mx-0">
				<FontAwesomeIcon icon={faPlusCircle} /> Add Category
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
						Add New Category
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<Row>
							<Col>
								<Form.Group>
									<Form.Label>Category Name</Form.Label>
									<Form.Control
										type="text"
										value={category}
										placeholder="Enter category here"
										required
										onChange={(e) => setCategory(e.target.value)}
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
