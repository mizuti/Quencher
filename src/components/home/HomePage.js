import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="row text-center">
            <h1>Quencher</h1>
            <h4>A tool for keeping track of drinking habits.</h4>
            <Link to="dashboard" className="btn btn-primary btn-lg btn-start">Get Started</Link>
        </div>
      </section>
    );
  }
}

export default HomePage;
