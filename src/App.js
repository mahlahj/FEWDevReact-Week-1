import React, { Component } from 'react';
/*9.- Remove logo.
import logo from './logo.svg';*/
/* Import own things.
10.- This will not be needed.
import { Navbar, NavbarBrand } from 'reactstrap';
Import the menu from MenuComponents.js 
10.- import the Main from MainComponent*/
import Main from './components/MainComponents';
import './App.css';
/* 7.- Import the dishes from shared folder. */
import { DISHES } from './shared/dishes';


class App extends Component {
  /*Remove the constructor completely after the MainComponent is ready.
  constructor (props) { // 7.- Add constructor.
    super(props);

    this.state = { // 8.- Add state and define it.
      dishes: DISHES
    };
  }*/

  render () {
    return (
      <div>
        {/* 10.- The nav bar was moved to the MainComponents, so can be deleted.
        After this only the Main is rendered.
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/> 8.- dishes equal to this.state.dishes.
                                               The dishes defined in the state for the App 
                                               component are available as props to the menu
                                               component.*/ }
        <Main />
      </div>
    );
  }
}

export default App;
