import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './styles.css';

function AlbumCard({showModal, title, year, thumb}) {
  
  
  function showingAlbumModal() {
  
  }

  return (
    <>
      <Card 
        className='album-card'
        onClick={() => setShowModal(true)}
      >
        <Card.Img variant='top' src={thumb} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{year}</Card.Subtitle>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlbumCard;