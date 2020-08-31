/* 10.- Copy and paste the majority of data from App.js. and DishDetail from MenuComp. */
import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
        <Header/>
        <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;
