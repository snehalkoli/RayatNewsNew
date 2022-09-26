import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Badge, Button } from "react-bootstrap";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

//control panel componants
import TitleBar from "./TitleBarComponent";
import Update from "./Update";
import Overview from "./Overview";

//API handling components
import { BASE_URL } from "./../global";
import jsZip from "jszip";
import Add from "./Add";
const axios = require("axios");

//datatable modules
window.JSZip = jsZip;
const $ = require("jquery");
$.DataTable = $.DataTable = require("datatables.net");
require("react-bootstrap");
require("datatables.net-bs4");
require("datatables.net-buttons-bs4");
require("datatables.net-buttons/js/buttons.colVis.js");
require("datatables.net-buttons/js/buttons.flash.js");
require("datatables.net-buttons/js/buttons.html5.js");
require("datatables.net-buttons/js/buttons.print.js");

export class ListView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			currentUser: this.props.match.params.email,
			role: this.props.match.params.role,
		};
	}
	componentDidMount() {
		this.fetchData();
	}
	fetchData() {
		var query = `Select * from admin;`;
		let url = BASE_URL + "/executeQuery";
		let data = {
			crossDomain: true,
			crossOrigin: true,
			query: query,
		};

		axios
			.post(url, data)
			.then((res) => {
				this.setState({ users: res.data });
			})
			.catch((err) => console.log(err));
	}

	componentDidUpdate() {
		this.$el = $(this.el);
		var table = this.$el.DataTable({
			destroy: true,
			autoWidth: false,
			responsive: true,
			keys: true,
			dom: "<'row mb-2'<'col-sm-9'>><'row'<'col-sm-12' tr>><p>",

			columns: [
				{ title: "User Id", width: "8%" },
				{ title: "Name", width: "20%" },
				{ title: "Email", width: "30%" },
				{ title: "User Role", width: "15%" },
				{ title: "User Status", width: "15%" },
				{
					title: "Options",
					width: "10%",
					searchable: false,
					orderable: false,
				},
			],
		});

		$("#example thead th").each(function () {
			var title = $(this).text();
			$(this).html(
				'<input type="text" placeholder="Search ' +
					title +
					'" class="form-control" />'
			);
		});
		table.columns().every(function () {
			var that = this;

			$("input", this.header()).on("keyup change clear", function () {
				if (that.search() !== this.value) {
					that.search(this.value).draw();
				}
			});
			return 0;
		});
	}
	extractData() {
		const users = this.state.users;
		return users.map((user) => {
			return (
				<tr key={user.id}>
					<td>{user.id}</td>
					<td>
						<b>{user.name}</b>
					</td>
					<td>
						<b>{user.userName}</b>
					</td>
					<td>
						{user.userRole === 1 ? (
							<Badge variant="primary">Normal User</Badge>
						) : (
							<Badge variant="dark">Admin User</Badge>
						)}
					</td>
					<td>
						{user.userStatus === 1 ? (
							<Badge variant="success">Active User</Badge>
						) : (
							<Badge variant="danger">Disabled</Badge>
						)}
					</td>
					<td>
						<Update
							user={user}
							currentUser={this.state.currentUser}
							currentUserRole={this.state.role}
							userStateUpdater={() => {
								this.fetchData();
							}}
						/>
					</td>
				</tr>
			);
		});
	}
	componentWillUnmount() {
		$("#example").DataTable().destroy(true);
	}
	render() {
		return (
			<Row className="mt-1 ml-0 mr-0 mb-0 p-0">
				<Col
					className="col-md-10 border m-0 pt-1 px-2"
					style={{ borderRadius: "5px", minHeight: "80vh" }}
				>
					<TitleBar></TitleBar>
					<hr className="m-0 mb-1 p-0" />
					<div className="d-flex">
						<Add
							currentUserRole={this.state.role}
							userStateUpdater={() => {
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
					{this.state.users.length > 0 ? (
						<table
							id="example"
							className="table table-striped table-sm table-bordered"
							ref={(el) => (this.el = el)}
						>
							<thead>
								<tr>
									<th>User Id</th>
									<th>Publisher Name</th>
									<th>Email</th>
									<th>User Role</th>
									<th>User Status</th>
									<th>Options</th>
								</tr>
							</thead>
							<tr>
								<th>User Id</th>
								<th>Publisher Name</th>
								<th>Email</th>
								<th>User Role</th>
								<th>User Status</th>
								<th>Options</th>
							</tr>
							<tbody>{this.extractData()}</tbody>
						</table>
					) : (
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
					)}
				</Col>
				<Col className="col-md-2 m-0 p-0">
					<Overview />
				</Col>
			</Row>
		);
	}
}

export default ListView;
