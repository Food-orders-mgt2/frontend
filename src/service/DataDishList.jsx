import React, { Component } from 'react';
import CardForProduct from '../components/CardProduct';
import '../Style/CardForProduct.css'

export default class DishList extends Component {
  state = {
    dishes: [],
  };

  componentDidMount() {
    fetch("/dish/dish", {
        headers: {
            Accept: 'application/json',
        },
    })
    .then(response => {
        console.log("Full response:", response);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        this.setState({
            dishes: data
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error.message);
        error.response.text().then(text => console.log("Raw response text:", text));
    });
}


  render() {
    return (      
      <div className='contenair' style={{ maxHeight: '400px', overflowY: 'scroll',marginRight:0,paddingRight:0}}>
        {this.state.dishes.map(dish => ( 
          <CardForProduct key={dish.id} dish={dish} />
        ))}
      </div>
    );
  }
}
