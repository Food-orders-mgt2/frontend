import React, { Component } from 'react';
import CardForProduct from '../components/CardProduct';
import '../Style/CardForProduct.css';

export default class DishList extends Component {
  state = {
    dishes: [],
  };

  componentDidMount() {
    const url = 'https://para-dish-back.onrender.com/dish';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ dishes: data });
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
      });
  }

  render() {
    return (
      <div className='container' style={{ maxHeight: '400px', overflowY: 'scroll', marginRight: 0, paddingRight: 0, display: 'flex', flexWrap: 'wrap' }}>
      {this.state.dishes.map(dish => (
        <CardForProduct key={dish.id} dish={dish} style={{ flex: '1 0 200px', margin: '8px' }} />
      ))}
    </div>    
    );
  }
}
