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
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );    
          })
        }
      </div>
      );
  }
}

export default App;

