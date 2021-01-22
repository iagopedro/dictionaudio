import React from 'react';

import Card from 'react-bootstrap/Card';

import './styles.css'

function AlbumCard({title, year, thumb}) {
  return (
    <Card className='album-card'>
      <Card.Img variant='top' src={thumb} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{year}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default AlbumCard;