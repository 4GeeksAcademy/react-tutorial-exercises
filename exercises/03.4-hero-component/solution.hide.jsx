import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Hero = (props) => {
  // Here you have to return expected html using the properties being passed to the component
  return (
    <div className="container m-5">
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">{props.description}</p>
      <a
        className="btn btn-primary btn-lg"
        href={props.buttonURL}
        role="button">
        {props.buttonLabel}
      </a>
    </div>
  );
};

Hero.propTypes = {
  // PropTypes here
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonURL: PropTypes.string,
};

ReactDOM.render(
  <Hero
    title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"
  />,

  document.querySelector('#myDiv')
);
