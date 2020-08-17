import React, { Component } from 'react';
import logo from './logo.svg';
/* Import own things. */
import { Navbar, NavbarBrand } from 'reactstrap';
/* Import the menu from MenuComponents.js */
import Menu from './components/MenuComponents';
import './App.css';


class App extends Component {
  render () {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
