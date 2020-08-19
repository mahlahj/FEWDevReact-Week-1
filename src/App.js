import React, { Component } from 'react';
import logo from './logo.svg';
/* Import own things. */
import { Navbar, NavbarBrand, Form } from 'reactstrap';
/* Import the menu from MenuComponents.js */
import Menu from './components/MenuComponents';
import './App.css';
/* 7.- Import the dishes from shared folder. */
import { DISHES } from './shared/dishes';


class App extends Component {
  constructor (props) { // 7.- Add constructor.
    super(props);

    this.state = { // 8.- Add state and define it.
      dishes: DISHES
    };
  }

  render () {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/> {/* 8.- dishes equal to this.state.dishes.
                                               The dishes defined in the state for the App 
                                               component are available as props to the menu
                                               component.*/ }
      </div>
    );
  }
}

export default App;
