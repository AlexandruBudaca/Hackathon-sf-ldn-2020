import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import LazyCarousel from './Carousel'
import LazyCarousel from './Carousel'
import './index.css';

class LandingPage extends Component {
  render() {
    return (<main className="main">
      <section className="carousel">
        <h2>Carousel</h2>
        <LazyCarousel />
      </section>
      <section className="About">
        <h2>ABOUT US</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      </section>
      <section className="ourStudent">
        <h2>Our Students</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
    </main>
    )
  }
}

export default LandingPage