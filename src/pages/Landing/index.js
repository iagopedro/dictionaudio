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
      <Jumbotron>
        <h1>Dictionaudio</h1>
        <p>A place where you can find any music artist you want.</p>
        <Form onSubmit={handleSubmit()}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Artist</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
              type="text" 
              aria-describedby="basic-addon1"
              value={artist}
              onChange={e => setArtist(e.target.value)}
            />
          </InputGroup>
          <Link to='/artistInfo'>
            <Button variant="primary" type='submit'>Search</Button>
          </Link>
        </Form>
        <div className='keyframes-test'></div>
      </Jumbotron>
    </Container>
  )
}

export default Landing;