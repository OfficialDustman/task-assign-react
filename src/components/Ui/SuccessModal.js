import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const SuccessModal = ({ show, handleClose, data }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{data.status}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{data.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;
