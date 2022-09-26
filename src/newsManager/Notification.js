import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBell } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BASE_URL } from "./../global";
import Swal from "sweetalert2";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
function Notification({ id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mopen, setMOpen] = useState(false);

  const onHandle = () => {
    setMOpen(!mopen);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const sendNotification = () => {
    setOpen(true);
    var data = JSON.stringify({ id: id });

    var config = {
      method: "post",
      url: BASE_URL + "/send",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setMOpen(false);
        setOpen(false);
        Swal.fire({
          icon: "success",
          title: "Notification sent!",
          showCloseButton: true,
        });
      })
      .catch(function (error) {
        setMOpen(false);
        setOpen(false);
        Swal.fire({
          title: "Failed to send Notification!",
          html: "<p> error: " + error + "</p> ",
          showCloseButton: true,
        });
      });
  };
  return (
    <div>
      <Button
        onClick={onHandle}
        className="mx-1"
        variant="outline-primary btn-sm"
      >
        <FontAwesomeIcon icon={faBell} />
      </Button>
      <Modal
        show={mopen}
        onHide={onHandle}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="m-0 p-0">
            Do you really want to send notification to user ?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger btn-sm"
            style={{ float: "right" }}
            onClick={onHandle}
          >
            Cancel
          </Button>
          <Button
            variant="primary btn-sm"
            style={{ float: "right" }}
            onClick={sendNotification}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Notification;
