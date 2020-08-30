// 1.- Basic structure of a component. 
import React, { Component } from 'react';
// 3.- Import the media component to construct the menu for the restaurant. 
// 8.- Change the "Media" to "Card", "CardImg", etc to order the images in a different way.
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class Menu extends Component {
    constructor(props) {
        super(props);
        // 6.- Define a state for the component as a JS object containing an array list of JS Objects.
        /* 7.- Remove this code to make it more clean and set it apart in another file.
               Thus creating a new subfolder in Components named: shared subfolder, We're
               going to use  it to store all the information shared among various
               components in the React App. Then create a new file named dishes.js and
               into this dishes.js file paste all the information about the dishes,
               in the form of an array, and then export it from this dishes.js.*/
        /* 8.- selected.Dish is started at null so whenever clicked on any of the dishes,
               the information becomes equal to the selected.Dish.
               To do that, go into the first Card and introduce the onClick method. 
               This is to handle events on view. */
        /* 10.- Removed this in order to add to MainComps
                    this.state = {
                    selectedDish: null*/
        }
    }

    /* Implement the onDishSelect here.
    This receives the dish as the parameter.
    To update the selected dish to point to this dish and received it as a parameter
    we need to change the state by using "this.setState()".
    We can't directly select dish = dish. Instead we state "this.setState"
    and inside "selected.Dish" which results in whatever the function is called,
    then "this.setState" will be set equal to the the parameter received. */
    /*10.- Cut and paste onto the MainComps
        onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }*/

    /* To render the details of the dish we add in one more method here called renderDish
    which will supply the dish as the parameter and inside we will first check if dish isn't
    equal to null.
    Only then the dish will render, otherwise returns an empty div and nothing will be rendered
    on the screen. Then use the card designed in the card component to render my dish here.
    Inside the card component copy the card image to display it at the top,
    and down below display the CardBody, CardTitle, and CardText. */
    /*renderDish(dish) {
        if (dish != null) {
            return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            );
        }
        else {
            return(<div></div>);
        }
    }*/

    render() {
        // 5.- Define menu as a constant.
        // 8.- Then change "state" for "props".
        const menu = this.props.dishes.map((dish) => {
            return (
                /* 7.- When rendering a list of items, a key must be provided to recognize
                the items onscreen.*/
                <div className="col-12 col-md-5 m-1">
                    {/* 8.- ^^Add col-md-5 and mod mt. */}
                    <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                        {/* 8.- Change the "Media tag="li" to "Card".
                        To call the onClick function implemented use this.onDishSelect,
                        and then pass the dish information as a parameter. */}
                    {/*<Media left middle> 8.- Suppress the open/close lines. */}
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                            {/* 8.- Change Media to CardImg, replacing object to width*/}
                        <CardImgOverlay /*9.- this is unused body className="ml-5"*/>
                            {/* 8.- Change Media to CardImgOverlay at open/close. */}
                            <CardTitle>{dish.name}</CardTitle>
                            {/* 8.- Change Media heading to CardTitle. */}
                            {/*<p>{dish.description}</p> 8.- Deactivate this. */}
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            // 2.- Choose what to return from this component. Since is a menu, it will
            //     return dishes. 
            <div className="container">
                <div className="row">
                    {/* 8.- Remove the <Media list> */}
                    {menu}
                </div>
                <div className="row">
                {/*  8.- Define a row and inside this display the card.
                To do that use "this.renderDish" and "this.state.selectedDish" as parameter
                to that renderDish function.*/}
                    {/*this.renderDish(this.state.selectedDish)*/}
                    {/*<DishDetail selectedDish = {this.state.selectedDish}/>*/}
                </div>
            </div>
        );
    }

export default Menu;