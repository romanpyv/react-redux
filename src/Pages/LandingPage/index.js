import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './styles.css';

export default () => {
  return (
    <div className="home-bg">
      <div className="home-title-container">
        <h1>Artificial intelligence</h1>
        <Link className="start-btn" to="/test">
          <Button variant="contained" color="primary">
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
}