import React, { Component } from 'react';
import Customer from './component/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name':'Donald Trump',
  'birthday':'20190427',
  'gender':'Male',
  'job':'Employee'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name':'Mac Donald',
    'birthday':'20190428',
    'gender':'Male',
    'job':'Casher'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name':'Burger King',
    'birthday':'20190426',
    'gender':'Male',
    'job':'Server'
  }      
]

class App extends Component {
  render() {
    return(
      <div>
        <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />
        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />
        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        />      
      </div>
      );
  }
}

export default App;

