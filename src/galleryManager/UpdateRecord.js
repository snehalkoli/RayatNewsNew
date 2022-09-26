import React from "react";
import { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { Button, Form , Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt, faSave } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "../global";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function UpdategalleryPanel({
	gallery: { galleryId, galleryName ,galleryImage,gi1,gi2,gi3,gi4,gi5,gi6,gi7,gi8,gi9,gi10,gi11,gi12,gi13,gi14,gi15 },
	galleryStateUpdater,
}) {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	let touchedProps = {}; // to store modified values for this record

	const [modal, setModal] = useState(false);
	const [gallery, setgallery] = useState(galleryName);
	const [loading, setLoading] = useState(false);

	const [fileName, setFileName] = useState(galleryImage);
	const [fileName1, setFileName1] = useState(gi1);
	const [fileName2, setFileName2] = useState(gi2);
	const [fileName3, setFileName3] = useState(gi3);
	const [fileName4, setFileName4] = useState(gi4);
	const [fileName5, setFileName5] = useState(gi5);
	const [fileName6, setFileName6] = useState(gi6);
	const [fileName7, setFileName7] = useState(gi7);
	const [fileName8, setFileName8] = useState(gi8);
	const [fileName9, setFileName9] = useState(gi9);
	const [fileName10, setFileName10] = useState(gi10);
	const [fileName11, setFileName11] = useState(gi11);
	const [fileName12, setFileName12] = useState(gi12);
	const [fileName13, setFileName13] = useState(gi13);
	const [fileName14, setFileName14] = useState(gi14);
	const [fileName15, setFileName15] = useState(gi15);


	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	const fileUpload = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};

	const fileUpload1 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName1(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};

	const fileUpload2 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName2(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};


	const fileUpload3 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName3(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};


	const fileUpload4 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName4(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};


	const fileUpload5 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName5(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};

	const fileUpload6 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName6(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};

	const fileUpload7 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName7(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};

	const fileUpload8 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName8(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};

	const fileUpload9 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName9(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};

	const fileUpload10 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName10(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};


	const fileUpload11 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName11(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};

	const fileUpload12 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName12(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};

	const fileUpload13 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName13(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};

	const fileUpload14 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName14(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};

	const fileUpload15 = (e) => {
		//uploadfile
		// setFLoading(true);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post(`${BASE_URL}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				setFileName15(res.data.filePath);
				toast.success("Image Uploaded successfully");
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to Upload image",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
		// 		setFLoading(false);
			});
	};



	function handleChange(event) {
		// collect all modified values into touchedProps
		touchedProps[event.target.name] = event.target.value;
		console.log(touchedProps);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);
		//form query
		let query = `update gallery set galleryName = "${gallery}",galleryImage = "${fileName}",gi1 = "${fileName1}",gi2 = "${fileName2}",gi3 = "${fileName3}",gi4 = "${fileName4}",gi5 = "${fileName5}",gi6 = "${fileName6}",gi7 = "${fileName7}",gi8 = "${fileName8}",gi9 = "${fileName9}",gi10 = "${fileName10}",gi11 = "${fileName11}",gi12 = "${fileName12}",gi13 = "${fileName13}",gi14 = "${fileName14}",gi15 = "${fileName15}" where galleryId = "${galleryId}" ; `;
		//send HTTP request to API
		let url = BASE_URL + "/executeQuery";
		let data = {
			crossDomain: true,
			crossOrigin: true,
			query: query,
		};
		// alert(query);
		axios
			.post(url, data)
			.then((res) => {
				Swal.fire({
					icon: "success",
					title: "Gallery Updated successfully",
					showCloseButton: true,
				});
				galleryStateUpdater();
				closeModal();
				setLoading(false);
			})
			.catch((err) => {
				Swal.fire({
					title: "Failed to add gallery",
					html: "<p>please check your Internet Connection!</p> ",
					showCloseButton: true,
				});
				setLoading(false);
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
				<form onSubmit={handleSubmit}>
						<Row>
							<Col>
								<Form.Group>
									<Form.Label>gallery Name</Form.Label>
									<Form.Control
										type="text"
										value={gallery}
										placeholder="Enter Gallery Name here"
										required
										onChange={(e) => setgallery(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
											<Form.Label>Gallery Image</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName}
												custom
												onChange={(e) => {
													fileUpload(e);
												}}
											/>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col>
									<Form.Group>
											<Form.Label> Gallery Image 1</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName1}
												custom
												onChange={(e) => {
													fileUpload1(e);
												}}
											/>
									</Form.Group>
							</Col>
							<Col>
								<Form.Group>
											<Form.Label>Gallery Image 2</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName2}
												custom
												onChange={(e) => {
													fileUpload2(e);
												}}
											/>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col>
									<Form.Group>
											<Form.Label> Gallery Image 3</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName3}
												custom
												onChange={(e) => {
													fileUpload3(e);
												}}
											/>
									</Form.Group>
							</Col>
							<Col>
								<Form.Group>
											<Form.Label>Gallery Image 4</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName4}
												custom
												onChange={(e) => {
													fileUpload4(e);
												}}
											/>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col>
									<Form.Group>
											<Form.Label> Gallery Image 5</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName5}
												custom
												onChange={(e) => {
													fileUpload5(e);
												}}
											/>
									</Form.Group>
							</Col>
							<Col>
								<Form.Group>
											<Form.Label>Gallery Image 6</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName6}
												custom
												onChange={(e) => {
													fileUpload6(e);
												}}
											/>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col>
									<Form.Group>
											<Form.Label> Gallery Image 7</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName7}
												custom
												onChange={(e) => {
													fileUpload7(e);
												}}
											/>
									</Form.Group>
							</Col>
							<Col>
								<Form.Group>
											<Form.Label>Gallery Image 8</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName8}
												custom
												onChange={(e) => {
													fileUpload8(e);
												}}
											/>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col>
									<Form.Group>
											<Form.Label> Gallery Image 9</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName9}
												custom
												onChange={(e) => {
													fileUpload9(e);
												}}
											/>
									</Form.Group>
							</Col>
							<Col>
								<Form.Group>
											<Form.Label>Gallery Image 10</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName10}
												custom
												onChange={(e) => {
													fileUpload10(e);
												}}
											/>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col>
									<Form.Group>
											<Form.Label> Gallery Image 11</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName11}
												custom
												onChange={(e) => {
													fileUpload11(e);
												}}
											/>
									</Form.Group>
							</Col>
							<Col>
								<Form.Group>
											<Form.Label>Gallery Image 12</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName12}
												custom
												onChange={(e) => {
													fileUpload12(e);
												}}
											/>
								</Form.Group>
							</Col>
						</Row>


						<Row>
							<Col>
									<Form.Group>
											<Form.Label> Gallery Image 13</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName13}
												custom
												onChange={(e) => {
													fileUpload13(e);
												}}
											/>
									</Form.Group>
							</Col>
							<Col>
								<Form.Group>
											<Form.Label>Gallery Image 14</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName14}
												custom
												onChange={(e) => {
													fileUpload14(e);
												}}
											/>
								</Form.Group>
							</Col>
						</Row>


						<Row>
							<Col>
									<Form.Group>
											<Form.Label> Gallery Image 15</Form.Label>
											<Form.File
												id="custom-file"
												label={fileName15}
												custom
												onChange={(e) => {
													fileUpload15(e);
												}}
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

export default UpdategalleryPanel;
