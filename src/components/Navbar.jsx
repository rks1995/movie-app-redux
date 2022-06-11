import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className='nav'>
        <div className='nav-item'>
          <input className='search' type='text' placeholder='search movies' />
          <button className='search-btn'>Search</button>
        </div>
      </div>
    );
  }
}
