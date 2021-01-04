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
  const [bio, setBio] = useState('');

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get('/search.php', {
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
      <h1>{title}</h1>
      <Card className='card-container'>
        <Card.Body>
          <Card.Img 
            src={logo} 
            alt='Logo'
            className='logo'
          />
          <Card.Text>Genre: {genre}</Card.Text>
          <Card.Text>Bio: {bio}</Card.Text>
        </Card.Body>
      </Card>
      <Link to='/'>
        <Button variant='primary' className='btn'>Back</Button>      
      </Link>
    </Container>
  )
}

export default ArtistInfo;