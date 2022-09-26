import React, { useState } from "react";

//styling modules
import { Button, Modal, Form, Row, Col, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSave } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

//API handling components
import { BASE_URL } from "./../global";
const axios = require("axios");

function Add(props) {
	const [modal, setModal] = useState(false);
	const [gallery, setgallery] = useState("");
	const [loading, setLoading] = useState(false);

	const [fileName, setFileName] = useState("");
	const [fileName1, setFileName1] = useState("");
	const [fileName2, setFileName2] = useState("");
	const [fileName3, setFileName3] = useState("");
	const [fileName4, setFileName4] = useState("");
	const [fileName5, setFileName5] = useState("");
	const [fileName6, setFileName6] = useState("");
	const [fileName7, setFileName7] = useState("");
	const [fileName8, setFileName8] = useState("");
	const [fileName9, setFileName9] = useState("");
	const [fileName10, setFileName10] = useState("");
	const [fileName11, setFileName11] = useState("");
	const [fileName12, setFileName12] = useState("");
	const [fileName13, setFileName13] = useState("");
	const [fileName14, setFileName14] = useState("");
	const [fileName15, setFileName15] = useState("");

	function onHandle() {
		setModal(!modal);
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


	async function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);
		//form query
		let query = `INSERT INTO gallery (galleryName,galleryImage,gi1,gi2,gi3,gi4,gi5,gi6,gi7,gi8,gi9,gi10,gi11,gi12,gi13,gi14,gi15) VALUES("${gallery}","${fileName}","${fileName1}","${fileName2}","${fileName3}","${fileName4}","${fileName5}","${fileName6}","${fileName7}","${fileName8}","${fileName9}","${fileName10}","${fileName11}","${fileName12}","${fileName13}","${fileName14}","${fileName15}")`;
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
					title: "gallery Added successfully",
					showCloseButton: true,
				});
				props.galleryStateUpdater();
				setModal(false);
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
			<Button onClick={onHandle} variant="info btn-sm" className="mx-0">
				<FontAwesomeIcon icon={faPlusCircle} /> Add gallery
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
						Add New gallery
					</Modal.Title>
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
												required
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

export default Add;
