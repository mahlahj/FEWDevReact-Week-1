// 1.- Basic structure of a component. 
import React, { Component } from 'react';
// 3.- Import the media component to construct the menu for the restaurant. 
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        // 6.- Define a state for the component as a JS object containing an array list of JS Objects.
        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Uthapizza',
                    image: 'assets/images/uthapizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer'
                },
                {
                    id: 1,
                    name:'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 2,
                    name:'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'A quintessential ConFusion experience, is it a vada or is it a donut?'
                },
                {
                    id: 3,
                    name:'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                }
            ]
        }
    }

    render() {

        // 5.- Define menu as a constant.
        const menu = this.state.dishes.map((dish) => {
            return (
                // 7.- When rendering a list of items, a key must be provided to recognize the items onscreen.
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return (
            // 2.- Choose what to return from this component. Since is a menu, it will
            //     return dishes. 
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;