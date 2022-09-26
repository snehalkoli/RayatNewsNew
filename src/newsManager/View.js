import React, { Component } from "react";
//styling modules
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };
  }

  onHandle() {
    this.setState({ modal: !this.state.modal });
  }
  render() {
    const {
      newsId,
      imageUrl,
      title,
      description,
      date,
      sourceName,
      categoryName,
      publisher,
    } = this.props.news;
    return (
      <div>
        <Button
          onClick={() => {
            this.onHandle();
          }}
          className="mx-1"
          variant="outline-primary btn-sm"
        >
          <FontAwesomeIcon icon={faEye} />
        </Button>
        <Modal
          show={this.state.modal}
          onHide={() => {
            this.onHandle();
          }}
          size={description === "banner" ? "md" : "lg"}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div ref={(el) => (this.componentRef = el)}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                News Overview
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {description === "banner" ? (
                <Form>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Banner ID</Form.Label>
                        <Form.Control type="text" value={newsId} readOnly />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Posted At</Form.Label>
                        <Form.Control
                          type="text"
                          value={moment(date).format("Do MMM YYYY HH:mm A")}
                          readOnly
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={title} readOnly />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ display: "grid", placeItems: "center" }}>
                      <img
                        alt={"image-banner" + newsId}
                        src={
                          "https://rnews.5techg.com/api/news/RayatNews-backend_node-master/" +
                          imageUrl
                        }
                        height="200"
                        width="400"
                        style={{ objectFit: "contain" }}
                      />
                    </Col>
                  </Row>
                </Form>
              ) : (
                <Form>
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
                        <Form.Control
                          type="text"
                          value={categoryName}
                          readOnly
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Posted At</Form.Label>
                        <Form.Control
                          type="text"
                          value={moment(date).format("Do MMM YYYY HH:mm A")}
                          readOnly
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={title} readOnly />
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
                          value={description}
                          readOnly
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
                          value={
                            sourceName === null
                              ? "Source not specified"
                              : sourceName
                          }
                          readOnly
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Published By</Form.Label>
                        <Form.Control
                          type="text"
                          value={
                            publisher === null
                              ? "Publisher not specified"
                              : publisher
                          }
                          readOnly
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ display: "grid", placeItems: "center" }}>
                      <img
                        alt={"image-banner" + newsId}
                        src={
                          "https://rnews.5techg.com/api/news/RayatNews-backend_node-master/" +
                          imageUrl
                        }
                        height="250"
                        width="500"
                        style={{ objectFit: "contain" }}
                      />
                    </Col>
                  </Row>
                </Form>
              )}
            </Modal.Body>
          </div>
        </Modal>
      </div>
    );
  }
}

export default View;
