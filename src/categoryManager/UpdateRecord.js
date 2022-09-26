import React from "react";
import { Modal, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt, faSave } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "../global";
import axios from "axios";

function UpdateCategoryPanel({
	category: { categoryId, categoryName },
	categoryStateUpdater,
}) {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	let touchedProps = {}; // to store modified values for this record

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
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
		let query = "UPDATE category SET ";
		query = query + params + " WHERE categoryId=" + categoryId;
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
					title: "Category updated successfully",
					showCloseButton: true,
				});
				categoryStateUpdater();
				closeModal();
			})
			.catch((err) => {
				Swal.fire({
					title: "Record failed to update !",
					html: "<p> error: " + err + "</p> ",
					showCloseButton: true,
				});
			});
	}
	return (
		<div>
			<button
				className="btn btn-outline-info btn-sm btn-block"
				onClick={openModal}
			>
				<FontAwesomeIcon icon={faPenAlt} />
			</button>
			<Modal show={modalIsOpen} onHide={closeModal} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>Update News Categories</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="border p-3">
							<Row>
								<Col>
									<div className="form-group">
										<label>Category Id</label>
										<input
											type="text"
											defaultValue={categoryId}
											className="form-control"
											readOnly
										/>
									</div>
								</Col>
								<Col>
									<div className="form-group">
										<label>Category Name</label>
										<input
											type="text"
											className="form-control"
											name="categoryName"
											defaultValue={categoryName}
											onChange={handleChange}
										/>
									</div>
								</Col>
							</Row>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={handleSubmit} className="btn btn-primary btn-sm m-1">
						<FontAwesomeIcon icon={faSave} /> Save
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default UpdateCategoryPanel;
