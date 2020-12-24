import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './styles.css';

import api from '../../services/api';



function ArtistInfo() {
  const artist = localStorage.getItem('artist');

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [logo, setLogo] = useState(null);
  const [bio, setBio] = useState(null);

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get('/', {
        params: {
          s: `${artist}`
        },
      })
      
      const info = response.data.artists[0];
      console.log(info);
      setTitle(info.strArtist);
      setGenre(info.strGenre);
      setLogo(info.strArtistLogo);
      setBio(info.strBiographyEN);
    }

    loadInfo();
  }, [artist]);
  
  return (
    <Container className='main-container' fluid>
      <Card className='card-container'>
        <Card.Body>
          <Card.Img 
            src={logo} 
            alt='Logo'
            className='logo'
          />
          <Card.Subtitle>{title}</Card.Subtitle>
          <Card.Text>Genre: {genre}</Card.Text>
          <Card.Text>Bio: {bio}</Card.Text>
        </Card.Body>
        <Link to='/'>
          <Button variant='primary'>Back</Button>      
        </Link>
      </Card>
    </Container>
  )
}

export default ArtistInfo;