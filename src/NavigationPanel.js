import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function NavigationPanel(props) {
	return (
		<div className="container m-0 p-0">
			<div>
				<Card border="primary" className="mb-2">
					<Card.Body className="m-0 p-1">
						<h6>Menu</h6>
						<Link to="/newsManager">
							<Button variant="primary" size="sm" block className="mb-2">
								News manager
							</Button>
						</Link>
						<Link to="/categoryManager">
							<Button variant="primary" size="sm" block className="mb-2">
								Category manager
							</Button>
						</Link>
						<Link to="/galleryManager">
							<Button variant="primary" size="sm" block className="mb-2">
								Gallery manager
							</Button>
						</Link>
						<Link to={`/userManager/${props.email}/${props.userRole}`}>
							<Button variant="primary" size="sm" block className="mb-2">
								User manager
							</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}

export default NavigationPanel;
