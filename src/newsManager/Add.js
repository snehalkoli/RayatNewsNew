import React, { useState } from "react";

//styling modules
import { Button, Modal, Form, Row, Col, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faSave,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { AppBar, Tab } from "@material-ui/core";
import { TabContext, TabPanel, TabList } from "@material-ui/lab";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import cookie from "js-cookie";

//API handling components
import { BASE_URL } from "./../global";
const axios = require("axios");

function Add(props) {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [sourceName, setSourceName] = useState("");
  const [status, setStatus] = useState(2);
  const [scheduleTime, setScheduleTime] = useState(null);
  const [timeDifference, setTimeDifference] = useState(null);
  const [categoryId, setCategoryId] = useState(1);
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose File");
  const [loading, setLoading] = useState(false);
  const [fLoading, setFLoading] = useState(false);
  const [titleCount, setTitleCount] = useState(title.length);
  const [dCount, setDCount] = useState(description.length);
  const [tab, setTab] = useState("1");

  const handleClear = () => {
    setTitle("");
    setScheduleTime("");
    setImageUrl("");
    setFile("");
    setFileName("Choose File");
    setDescription("");
    setSource("");
    setStatus(2);
  };

  function onHandle() {
    setModal(!modal);
    // form query
    let query = "SELECT * FROM category";
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
        setCategories(res.data);
      })
      .catch((err) => {});
  }

  const fileUpload = () => {
    //uploadfile
    setFLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(`${BASE_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        setImageUrl(res.data.filePath);
        setFLoading(false);
        toast.success("Image Uploaded successfully");
      })
      .catch((err) => {
        Swal.fire({
          title: "Failed to Upload image",
          html: "<p>please check your Internet Connection!</p> ",
          showCloseButton: true,
        });
        setFLoading(false);
      });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    //schedule news code block
    if (status === "3") {
      let query = `CREATE EVENT IF NOT EXISTS test_event_${Math.floor(
        Math.random() * 1000 + 1
      )} ON SCHEDULE at current_timestamp() + INTERVAL ${timeDifference} MINUTE DO UPDATE news set status=1 where title="${title}"; `;
      //send HTTP request to APIs
      let url = BASE_URL + "/executeQuery";
      let data = {
        crossDomain: true,
        crossOrigin: true,
        query: query,
      };
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //form query
    var date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    // let query = `INSERT INTO news (title,imageUrl,description,source,date,categoryId,status,sourceName,publisher) VALUES("${title}","${imageUrl}","${description}","${source}",current_timestamp(),${categoryId},${status},"${sourceName}","${cookie.get(
    //   "publisher"
    // )}")`;

    let query = `INSERT INTO news (title,imageUrl,description,source,categoryId,status,sourceName,publisher) VALUES("${title}","${imageUrl}","${description}","${source}",${categoryId},${status},"${sourceName}","${cookie.get(
      "publisher"
    )}")`;

    console.log(query);
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
          title: "News Added successfully",
          showCloseButton: true,
        });
        console.log(res);
        props.newsStateUpdater();
        setModal(false);
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          title: "Failed to post news",
          html: "<p>please check your Internet Connection!</p> ",
          showCloseButton: true,
        });
        setLoading(false);
      });
  }
  async function handleSubmit1(event) {
    event.preventDefault();
    setLoading(true);

    //schedule news code block
    if (status === "3") {
      let query = `CREATE EVENT IF NOT EXISTS test_event_${Math.floor(
        Math.random() * 1000 + 1
      )} ON SCHEDULE at current_timestamp() + INTERVAL ${timeDifference} MINUTE DO UPDATE news set status=1 where title="${title}"; `;
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
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //form query
    var date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    let query = `INSERT INTO news (title,imageUrl,description,date,status) VALUES("${title}","${imageUrl}","banner","${date}",${status})`;

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
          title: "Banner Added successfully",
          showCloseButton: true,
        });
        props.newsStateUpdater();
        setModal(false);
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          title: "Failed to Add banner post",
          html: "<p>please check your Internet Connection!</p> ",
          showCloseButton: true,
        });
        setLoading(false);
      });
  }

  const handleTabs = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <div>
      <Button onClick={onHandle} variant="info" className="mx-0">
        <FontAwesomeIcon icon={faPlusCircle} />
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
            Welcome {cookie.get("publisher")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TabContext
            value={tab}
            className="container-fluid border m-0 p-0 main"
          >
            <AppBar position="static" color="primary">
              <TabList
                onChange={handleTabs}
                aria-label="simple tabs example"
                indicatorColor="secondary"
                textColor="default"
              >
                <Tab label="News Post" value="1" />
                <Tab label="Banner Post" value="2" />
              </TabList>
            </AppBar>
            <TabPanel value="1" className="mt-2 p-0">
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        as="select"
                        value={categoryId}
                        name="categoryId"
                        required
                        onChange={(e) => setCategoryId(e.target.value)}
                      >
                        {categories &&
                          categories.map((category) => (
                            <option value={category.categoryId}>
                              {category.categoryName}
                            </option>
                          ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Status</Form.Label>
                      <Form.Control
                        as="select"
                        value={status}
                        name="status"
                        required
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="1">Published</option>
                        <option value="2">Drafted</option>
                        <option value="3">Scheduled</option>
                        <option value="4">Advertise_Notification</option>
                        <option value="5">Notification_1</option>
                        <option value="6">Notification_2</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                {status === "3" ? (
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Schedule time</Form.Label>
                        <br />
                        <Form.Control
                          value={scheduleTime}
                          type="datetime-local"
                          onChange={(e) => {
                            var a = moment(new Date());
                            var b = moment(e.target.value);
                            setScheduleTime(e.target.value);
                            console.log(b);
                            var c = b.diff(a, "minutes");
                            setTimeDifference(c);
                          }}
                        />
                        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
													<DateTimePicker
														label="Schedule time"
														inputVariant="outlined"
														value={scheduleTime}
														onChange={(e) => {
															setScheduleTime(e);
															var a = moment(new Date());
															var b = moment(e);
															var c = b.diff(a, "minutes");
															console.log(c);
															setTimeDifference(c);
														}}
													/>
												</MuiPickersUtilsProvider> */}
                      </Form.Group>
                    </Col>
                  </Row>
                ) : null}

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        Title <small> {75 - titleCount + "/75"}</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={title}
                        placeholder="Enter news title here"
                        name="title"
                        required
                        onChange={(e) => {
                          setTitle(e.target.value);
                          setTitleCount(title.length);
                        }}
                        maxLength="76"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        Description <small> {400 - dCount + "/400"}</small>{" "}
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="5"
                        value={description}
                        placeholder="Enter news description here"
                        name="description"
                        required
                        onChange={(e) => {
                          setDescription(e.target.value);
                          setDCount(description.length);
                        }}
                        maxLength="400"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Source Link</Form.Label>
                      <Form.Control
                        type="text"
                        value={source}
                        placeholder="Enter news source link here"
                        name="source"
                        onChange={(e) => setSource(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Source Name *</Form.Label>
                      <Form.Control
                        type="text"
                        value={sourceName}
                        required
                        placeholder="Enter news source name here"
                        name="sourceName"
                        onChange={(e) => setSourceName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row
                  className="border mx-0 mb-3 py-2"
                  style={{ borderRadius: "5px" }}
                >
                  <Col md={8}>
                    <Form.Group>
                      <Form.Label>Image</Form.Label>
                      <Form.File
                        id="custom-file"
                        label={fileName}
                        custom
                        required
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                          setFileName(e.target.files[0].name);
                        }}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={2}>
                    <Form.Group className="mt-4 pt-2">
                      <Button
                        variant={
                          imageUrl === ""
                            ? "primary btn-block"
                            : "success btn-block"
                        }
                        disabled={file === "" ? true : false}
                        onClick={() => fileUpload()}
                      >
                        {fLoading ? (
                          <Spinner animation="border" size="sm" />
                        ) : imageUrl === "" ? (
                          "Upload"
                        ) : (
                          <FontAwesomeIcon icon={faCheckCircle} />
                        )}
                      </Button>
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group className="mt-4 pt-2">
                      <Button
                        variant="danger btn-block"
                        disabled={file === "" ? true : false}
                        onClick={() => {
                          setImageUrl("");
                          setFile("");
                          setFileName("Choose File");
                        }}
                      >
                        Clear
                      </Button>
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  variant="primary mt-2"
                  style={{ float: "right" }}
                  type="submit"
                  disabled={imageUrl === "" ? true : false}
                >
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faSave} /> Post
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleClear}
                  variant="dark mt-2 mr-2	"
                  style={{ float: "right" }}
                >
                  Clear
                </Button>
              </form>
            </TabPanel>
            <TabPanel value="2" className="mt-2 p-0">
              <form onSubmit={handleSubmit1}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={title}
                        placeholder="Enter news title here"
                        name="title"
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Status</Form.Label>
                      <Form.Control
                        as="select"
                        value={status}
                        name="status"
                        required
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="1">Published</option>
                        <option value="2">Drafted</option>
                        <option value="3">Scheduled</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  {status === "3" ? (
                    <Col>
                      <Form.Group>
                        <Form.Label>Schedule time</Form.Label>
                        <br />
                        <Form.Control
                          value={scheduleTime}
                          type="datetime-local"
                          onChange={(e) => {
                            setScheduleTime(e.target.value);
                            var a = moment(new Date());
                            var b = moment(e.target.value);
                            var c = b.diff(a, "minutes");
                            setTimeDifference(c);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  ) : null}
                </Row>
                <Row className="mb-3">
                  <Col md={8}>
                    <Form.Group>
                      <Form.Label>Image</Form.Label>
                      <Form.File
                        id="custom-file"
                        label={fileName}
                        custom
                        required
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                          setFileName(e.target.files[0].name);
                        }}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={2}>
                    <Form.Group className="mt-4 pt-2">
                      <Button
                        variant={
                          imageUrl === ""
                            ? "primary btn-block"
                            : "success btn-block"
                        }
                        disabled={file === "" ? true : false}
                        onClick={() => fileUpload()}
                      >
                        {fLoading ? (
                          <Spinner animation="border" size="sm" />
                        ) : imageUrl === "" ? (
                          "Upload"
                        ) : (
                          <FontAwesomeIcon icon={faCheckCircle} />
                        )}
                      </Button>
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group className="mt-4 pt-2">
                      <Button
                        variant="danger btn-block"
                        disabled={file === "" ? true : false}
                        onClick={() => {
                          setImageUrl("");
                          setFile("");
                          setFileName("Choose File");
                        }}
                      >
                        Clear
                      </Button>
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  variant="primary mt-2"
                  style={{ float: "right" }}
                  type="submit"
                  disabled={imageUrl === "" ? true : false}
                >
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faSave} /> Post
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleClear}
                  variant="dark mt-2 mr-2	"
                  style={{ float: "right" }}
                >
                  Clear
                </Button>
              </form>
            </TabPanel>
          </TabContext>
        </Modal.Body>
      </Modal>
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={8000} />
    </div>
  );
}

export default Add;
