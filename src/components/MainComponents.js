/* 10.- Copy and paste the majority of data from App.js. and DishDetail from MenuComps. */
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor (props) { // 7.- Add constructor.
    super(props);

    this.state = { // 8.- Add state and define it.
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
      this.setState({ selectedDish: dishId});
  }

  render () {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
      </div>
    );
  }
}

export default Main;
