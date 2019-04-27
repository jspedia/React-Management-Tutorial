import React, { Component } from 'react';
import Customer from './component/Customer'
import './App.css';

const customer = {
  'name':'Donald Trump',
  'birthday':'20190427',
  'gender':'Male',
  'job':'Employee'
}

class App extends Component {
  render() {
    return(
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;

