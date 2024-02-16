import React, { Component } from 'react';
import CardForProduct from '../components/CardProduct';
import '../Style/CardForProduct.css';

export default class DishList extends Component{
  state = {
    dishes: [],
  };

  
  componentDidMount() {
    const url = '/api/dish';

    let fetchData = {
      method: 'GET',
      mode: 'no-cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': '*/*'
      })
    };
    
    
    
    fetch(url,fetchData)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ dishes: data });
      })
      .catch(error => {
        console.error('Error fetching data:', error.message)
      });
  }

  render() {
    return (
      <div className='contenair' style={{ maxHeight: '400px', overflowY: 'scroll', marginRight: 0, paddingRight: 0 }}>
        {this.state.dishes.map(dish => (
          <CardForProduct key={dish.id} dish={dish} />
        ))}
      </div>
    );
  }
}
 