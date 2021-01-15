import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import './styles.css';



function Landing() {
  const [artist, setArtist] = useState('');

  function handleSubmit() {
    localStorage.setItem('artist', artist);
  }

  return (
    <Container className='main-container' fluid>
      <Jumbotron className='content'>
        <div className='title-box'>
          <h1>Dictionaudio</h1>
          <p>A place where you can find any music artist you want.</p>
        </div>
        <Form className='search-form' onSubmit={handleSubmit()}>
          <InputGroup className='input-box'>
            <InputGroup.Prepend>
              <InputGroup.Text>Artist</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
              type="text" 
              aria-describedby="basic-addon1"
              value={artist}
              onChange={e => setArtist(e.target.value)}
              className='input-content'
            />
          </InputGroup>
          <Link to='/artistInfo' className='search-btn-box'>
            <Button 
            variant="primary" 
            type='submit'
            className='search-btn'
            >Search</Button>
          </Link>
        </Form>
      </Jumbotron>
    </Container>
  )
}

export default Landing;