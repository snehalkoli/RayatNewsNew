import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import {
	Switch,
	BrowserRouter as Router,
	Route,
	Redirect,
} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

// import CSS styles
import "bootstrap/dist/css/bootstrap.css";
// import components
import { ListView as NewsListViews } from "./newsManager/ListView";
import { ListView as CategoryListView } from "./categoryManager/ListView";
import { ListView as GalleryListView } from "./galleryManager/ListView";
import { ListView as UserListView } from "./userManager/ListView";
import NavigationPanel from "./NavigationPanel";
import { IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Cookies from "js-cookie";

function Main(props) {
	const [authenticated, setAuthenticated] = useState(props.location.state);

	useEffect(() => {}, [authenticated]);

	function logout() {
		Cookies.remove("publisher");
		setAuthenticated(null);
	}
	if (authenticated) {
		const { email, userRole, publisher_name } = authenticated;
		return (
			<Router>
				<div className="container-fluid m-0 p-0">
					<AppBar position="static" className="py-2 bg-primary">
						<Toolbar variant="dense">
						
							<Typography
								className="pl-0 ml-n2"
								variant="h6"
								color="inherit"
								style={{ flexGrow: 1 }}
							>
								Rayat News Admin Panel
							</Typography>

							<div>
								<Typography variant="p" className="mr-2" color="inherit">
									{email}
								</Typography>
								<IconButton
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									color="inherit"
								>
									<AccountCircle />
								</IconButton>
								<Button variant="default" onClick={logout}>
									Logout
								</Button>
							</div>
						</Toolbar>
					</AppBar>
					<Row className="mx-0 p-0 mt-1">
						<Col className="col-sm-2 m-0 p-1">
							<NavigationPanel
								email={email}
								userRole={userRole}
								publisher_name={publisher_name}
							/>
						</Col>
						<Col className="col-sm-10 m-0 p-0">
							<Switch>
								<Route path="/newsManager" exact component={NewsListViews} />
								<Route
									path="/categoryManager"
									exact
									component={CategoryListView}
								/>
								<Route
									path="/galleryManager"
									exact
									component={GalleryListView}
								/>
								<Route
									path="/userManager/:email/:role"
									exact
									component={UserListView}
								/>
							</Switch>
						</Col>
					</Row>
				</div>
			</Router>
		);
	} else {
		return <Redirect to="/" />;
	}
}

export default Main;
