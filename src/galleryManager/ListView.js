import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import CircularProgress from "@material-ui/core/CircularProgress";

// Panel modules
import TitleBar from "./Titlebar";
import UpdategalleryPanel from "./UpdateRecord";
import Add from "./Add";
import OverviewPanel from "./Overview";

// API req. handling modules
import { BASE_URL } from "../global";
// modules for data table
import jsZip from "jszip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
const axios = require("axios");
window.JSZip = jsZip;
var $ = require("jquery");
$.DataTable = require("datatables.net");
require("datatables.net-bs4");
require("datatables.net-autofill-bs4");
require("datatables.net-colreorder-bs4");
require("datatables.net-fixedcolumns-bs4");
require("datatables.net-fixedheader-bs4");
require("datatables.net-responsive-bs4");
require("datatables.net-rowgroup-bs4");
require("datatables.net-rowreorder-bs4");
require("datatables.net-scroller-bs4");
require("datatables.net-select-bs4");

export class ListView extends Component {
	constructor() {
		super();
		this.state = {
			data: [], // to store all user records
		};
	}

	// fun: to fetch user records from server
	fetchData() {
		//let records = this.props.match.params;
		let query = "SELECT * FROM gallery;";
		let url = BASE_URL + "/executeQuery";
		let data = {
			crossDomain: true,
			crossOrigin: true,
			query: query,
		};

		axios
			.post(url, data)
			.then((res) => {
				this.setState({ data: res.data });
			})
			.catch((err) => console.log(err));
	}

	// fun: to map raw gallery records details into JSX
	renderCategories() {
		let data = this.state.data;
		return data.map((gallery) => {
			return (
				<tr key={gallery.galleryId}>
					<td>{gallery.galleryId}</td>
					<td>{gallery.galleryName}</td>
					<td>
						<UpdategalleryPanel
							gallery={gallery}
							galleryStateUpdater={() => this.fetchData()}
						/>
					</td>
				</tr>
			);
		});
	}

	// fun: to fetch data when component get mounted
	componentDidMount() {
		this.fetchData();
	}

	render() {
		return (
			<Row className="mt-1 ml-0 mr-0 mb-0 p-0">
				<Col
					className="col-md-10 border m-0 pt-1 px-2"
					style={{ borderRadius: "5px", minHeight: "80vh" }}
				>
					{/* display titleBar */}
					<TitleBar />
					<hr className="m-0 mb-1 p-0" />
					<div className="d-flex">
						<Add
							galleryStateUpdater={() => {
								this.fetchData();
							}}
						/>
						<Button
							variant="dark btn-sm"
							className="ml-2"
							onClick={() => {
								this.fetchData();
							}}
						>
							<FontAwesomeIcon icon={faRedo} />
						</Button>
					</div>
					<div className="container p-0">
						{this.state.data.length === 0 ? (
							<div
								style={{
									minHeight: "80vh",
									width: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<CircularProgress />
							</div>
						) : (
							<table
								id="userListTable"
								className="table table-sm table-striped table-bordered w-100"
							>
								<thead id="header">
									<tr>
										<th>gallery Id</th>
										<th>gallery Name</th>
										<th>Options</th>
									</tr>
								</thead>
								<tr>
									<th>gallery Id</th>
									<th>gallery Name</th>
									<th>Options</th>
								</tr>
								<tbody>{this.renderCategories()}</tbody>
							</table>
						)}
					</div>
				</Col>
				<Col className="col-md-2 m-0 p-0">
					<OverviewPanel />
				</Col>
			</Row>
		);
	}

	// incomplete fun: to process component again when props get udpated
	componentWillReceiveProps() {
		this.fetchData();
	}

	// fun: to update data table when component get updated
	componentDidUpdate() {
		let table = $("#userListTable").DataTable({
			destroy: true,
			responsive: true,
			keys: true,
			dom: "<'row mb-2'<'col-sm-9' >><'row'<'col-sm-12' tr>><p>",
			columns: [
				{ width: "20%" },
				{ width: "90%" },
				{ width: "20%", searchable: false, orderable: false },
			],
		});

		$("#header th").each(function () {
			var title = $(this).text();
			$(this).html(
				'<input type="text" placeholder="Search ' +
					title +
					'" class="form-control"/>'
			);
		});
		table.order.listener("#columnNames", 1);
		table.columns().every(function () {
			var that = this;

			$("input", this.header()).on("keyup change clear", function () {
				if (that.search() !== this.value) {
					that.search(this.value).draw();
				}
			});
			return null;
		});
	}

	// fun: to destroy data table when component get unmounted
	componentWillUnmount() {
		$("#userListTable").DataTable().destroy(true);
	}
}
