import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

// import infoIcon from '../../assets/icons/icons8-info.png';
// import albumsIcon from '../../assets/icons/icons8-music-record.png';
// import facebookIcon from '../../assets/icons/icons8-facebook.png';
// import websiteIcon from '../../assets/icons/icons8-website.png';

import './styles.css';

import api from '../../services/api';



function ArtistInfo() {
  const artist = localStorage.getItem('artist');

  const [title, setTitle] = useState('');
  // const [genre, setGenre] = useState('');
  // const [logo, setLogo] = useState(null);
  const [avatar, setAvatar] = useState(null);
  // const [bio, setBio] = useState('');
  const [website, setWebsite] = useState('');
  const [facebook, setFacebook] = useState('');

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
      // setGenre(info.strGenre);
      // setLogo(info.strArtistLogo);
      setAvatar(info.strArtistThumb);
      // setBio(info.strBiographyEN);
      setWebsite(info.strWebsite);
      setFacebook(info.strFacebook);
    }

    loadInfo();
  }, [artist]);
  
  return (
    <Container className='main-container' fluid>
      <Container className='options'>
        <Container className='avatar-box'fluid>
          <Image 
            src={avatar}
            alt='Avatar'
            className='avatar'
            roundedCircle
          />
          <h5>{title}</h5>
        </Container>

        <Container className='artist-buttons' fluid>
          <Row>
            <Col>
              <Button variant='secondary'>
                {/* <Image 
                  src={infoIcon} 
                  alt='Info' 
                  className='icons'
                /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </Button>
            </Col>
            <Col>
              <Button variant='secondary'>
                {/* <Image 
                  src={albumsIcon} 
                  alt='Albums'
                  className='icons' 
                /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="16" height="16" fill="currentColor" class="bi bi-vinyl-fill" viewBox="0 0 16 16">
                  <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/>
                </svg>
              </Button>
            </Col>
          </Row>
        </Container>

        <Container className='links' fluid>
          <Row>
            <Col>
              <a href={website}>
                {/* <Image 
                  src={websiteIcon} 
                  alt='Website'
                  className='icons'
                /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="16" height="16" fill="currentColor" class="bi bi-at" viewBox="0 0 16 16">
                  <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
                </svg>
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href={facebook}>
                {/* <Image 
                  src={facebookIcon} 
                  alt='Facebook'
                  className='icons' 
                /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
            </Col>
          </Row>
        </Container>

        <Link to='/' className='btn-container'>
          <Button variant='primary' className='btn'>Back</Button>      
        </Link>
      </Container>
      <Container className='artist-content'></Container>
    </Container>
  )
}

export default ArtistInfo;