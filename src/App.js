import React, { Component } from 'react';
import Customer from './component/Customer'
import './App.css';

const customer = {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name':'Donald Trump',
  'birthday':'20190427',
  'gender':'Male',
  'job':'Employee'
}

class App extends Component {
  render() {
    return(
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;

