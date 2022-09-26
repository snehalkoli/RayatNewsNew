import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Badge, Button } from "react-bootstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TabContext, TabPanel, TabList } from "@material-ui/lab";
import {
  AppBar,
  LinearProgress,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

//control panel componants
import TitleBar from "./TitleBarComponent";
import View from "./View";
import Update from "./Update";
import Overview from "./Overview";
import Notification from "./Notification";

//API handling components
import { BASE_URL } from "./../global";
import Add from "./Add";
const axios = require("axios");

export class ListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Pnews: [],
      Dnews: [],
      Snews: [],
      Rnews: [],
      value: "1",
      isLoading: false,
      scheduleTime: null,
      date: moment(new Date()).format("YYYY-MM-DD"),
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.setState({ isLoading: true });

    var query1 = `Select n.*,c.categoryName from news AS n inner join category AS c on n.categoryId = c.categoryId and status in(1,4,5,6) and date like '${moment(
      this.state.date
    ).format("YYYY-MM-DD")}%' order by newsId DESC;`;

    var query2 = `Select n.*,c.categoryName from news AS n inner join category AS c on n.categoryId = c.categoryId and status in(2) and date like '${moment(
      this.state.date
    ).format("YYYY-MM-DD")}%' order by newsId DESC;`;

    var query3 = `Select n.*,c.categoryName from news AS n inner join category AS c on n.categoryId = c.categoryId and status in (3) order by newsId DESC;`;
    console.log(query1);

    var query4 = `Select n.*,c.categoryName from news AS n inner join category AS c on n.categoryId = c.categoryId and status in (0) and date like '${moment(
      this.state.date
    ).format("YYYY-MM-DD")}%' order by newsId DESC;`;

    let url = BASE_URL + "/executeQuery";
    let data = [
      {
        crossDomain: true,
        crossOrigin: true,
        query: query1,
      },
      {
        crossDomain: true,
        crossOrigin: true,
        query: query2,
      },
      {
        crossDomain: true,
        crossOrigin: true,
        query: query3,
      },
      {
        crossDomain: true,
        crossOrigin: true,
        query: query4,
      },
    ];

    axios
      .post(url, data[0])
      .then((res) => {
        this.setState({ Pnews: res.data });
        this.setState({ isLoading: false });
      })
      .catch((err) => console.log(err));
    axios
      .post(url, data[1])
      .then((res) => {
        this.setState({ Dnews: res.data });
      })
      .catch((err) => console.log(err));
    axios
      .post(url, data[2])
      .then((res) => {
        this.setState({ Snews: res.data });
      })
      .catch((err) => console.log(err));
    axios
      .post(url, data[3])
      .then((res) => {
        this.setState({ Rnews: res.data });
      })
      .catch((err) => console.log(err));
  }

  extractData(news) {
    return news.map((news, index) => {
      return (
        <TableRow
          key={news.newsId}
          style={
            news.description === "banner"
              ? { backgroundColor: "rgb(254, 255, 185)" }
              : null
          }
        >
          <TableCell>{index + 1}</TableCell>
          <TableCell>
            <b>{news.title.slice(0, 50)}...</b>
          </TableCell>
          <TableCell align="right">
            {news.description === "banner" ? "Banner Post" : news.categoryName}
          </TableCell>
          <TableCell>
            {moment(news.date).format("DD-MM-YYYY hh:mm A")}
          </TableCell>
          <TableCell>
            {news.status === 1 ? (
              <Badge variant="success">Published</Badge>
            ) : news.status === 2 ? (
              <Badge variant="dark">Drafted</Badge>
            ) : news.status === 3 ? (
              <Badge variant="warning">Scheduled</Badge>
            ) : news.status === 4 ? (
              <Badge variant="success">Advertise_Image</Badge>
            ) : news.status === 5 ? (
              <Badge variant="success">Published(Noti_1)</Badge>
            ) : news.status === 6 ? (
              <Badge variant="success">Published(Noti_2)</Badge>
            ) : (
              <Badge variant="danger">Removed</Badge>
            )}
          </TableCell>
          <TableCell className="d-flex">
            <View news={news} />
            <Update
              news={news}
              newsStateUpdater={() => {
                this.fetchData();
              }}
            />

            {news.status === 1 ||
            news.status === 4 ||
            news.status === 5 ||
            news.status === 6 ? (
              <Notification id={news.newsId} />
            ) : null}
          </TableCell>
        </TableRow>
      );
    });
  }

  handleTabs = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    return (
      <Row className="mt-1 ml-0 mr-0 mb-0 p-0">
        <Col
          className="col-md-10 border m-0 px-2 py-2"
          style={{ borderRadius: "5px" }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: "1" }}>
              <TitleBar />
            </div>
            <div
              className="mb-2"
              style={{ display: "flex", alignItems: "center" }}
            >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  autoOk
                  label="Date"
                  inputVariant="outlined"
                  InputAdornmentProps={{ position: "start" }}
                  clearable
                  orientation="landscape"
                  size="small"
                  disableFuture
                  value={this.state.date}
                  onChange={(date) => this.setState({ date: date })}
                />
              </MuiPickersUtilsProvider>
              <Button
                variant="dark btn-sm"
                className="ml-2"
                onClick={() => this.fetchData()}
              >
                Search
              </Button>
            </div>
          </div>
          <TabContext
            value={this.state.value}
            className="container-fluid border m-0 p-0 main"
          >
            <AppBar position="static" color="default">
              <TabList
                onChange={this.handleTabs}
                aria-label="simple tabs example"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Published" value="1" />
                <Tab label="Drafts" value="2" />
                <Tab label="Scheduled" value="3" />
                <Tab label="Removed" value="4" />
              </TabList>
            </AppBar>

            {this.state.isLoading ? <LinearProgress color="secondary" /> : null}
            <TabPanel value="1" className="mt-2 p-0">
              {this.state.Pnews.length > 0 ? (
                <TableContainer component={Paper} style={{ maxHeight: "74vh" }}>
                  <Table
                    id="workers_table"
                    stickyHeader
                    aria-label="simple table"
                    component={Paper}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>News Id</TableCell>
                        <TableCell>Heading</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Options</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>{this.extractData(this.state.Pnews)}</TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <div
                  style={{
                    minHeight: "74vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h5>You don't have any Published news available</h5>
                </div>
              )}
            </TabPanel>
            <TabPanel value="2" className="mt-2 p-0">
              {this.state.Dnews.length > 0 ? (
                <TableContainer component={Paper} style={{ maxHeight: "74vh" }}>
                  <Table
                    id="workers_table"
                    stickyHeader
                    aria-label="simple table"
                    component={Paper}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>News Id</TableCell>
                        <TableCell>Heading</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Options</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>{this.extractData(this.state.Dnews)}</TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <div
                  style={{
                    minHeight: "74vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h5>You don't have any Drafts news available</h5>
                </div>
              )}
            </TabPanel>
            <TabPanel value="3" className="mt-2 p-0">
              {this.state.Snews.length > 0 ? (
                <TableContainer component={Paper} style={{ maxHeight: "74vh" }}>
                  <Table
                    id="workers_table"
                    stickyHeader
                    aria-label="simple table"
                    component={Paper}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>News Id</TableCell>
                        <TableCell>Heading</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Options</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>{this.extractData(this.state.Snews)}</TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <div
                  style={{
                    minHeight: "74vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h5>You don't have any Scheduled news available</h5>
                </div>
              )}
            </TabPanel>
            <TabPanel value="4" className="mt-2 p-0">
              {this.state.Rnews.length > 0 ? (
                <TableContainer component={Paper} style={{ maxHeight: "74vh" }}>
                  <Table
                    id="workers_table"
                    stickyHeader
                    aria-label="simple table"
                    component={Paper}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>News Id</TableCell>
                        <TableCell>Heading</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Options</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>{this.extractData(this.state.Rnews)}</TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <div
                  style={{
                    minHeight: "74vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h5>You don't have any Removed news available</h5>
                </div>
              )}
            </TabPanel>
          </TabContext>
        </Col>
        <Col
          className="col-md-2 m-0 p-0"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Overview />
          <div>
            <div
              className="mb-5 mt-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Add
                newsStateUpdater={() => {
                  this.fetchData();
                }}
              />
              <Button
                variant="dark"
                className="ml-2"
                onClick={() => this.fetchData()}
              >
                <FontAwesomeIcon icon={faRedo} />
              </Button>
            </div>
            Powered by 5TechG
          </div>
        </Col>
      </Row>
    );
  }
}

export default ListView;
