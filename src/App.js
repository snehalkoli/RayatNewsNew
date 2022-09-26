import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// importing contexts
//import { UserProvider } from "./context/UserContext";
//import { VideosProvider } from "./context/VideosContext";

// import CSS styles
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// import components
import Login from "./adminLogin/Login";
import Main from "./Main";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container-fluid m-0 p-0">
					<Switch>
						<Route path="/newsManager" exact component={Main} />
						<Route path="/" component={Login} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
