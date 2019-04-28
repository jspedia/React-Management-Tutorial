import React, { Component } from 'react';
import Customer from './component/Customer'
import './App.css';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </div>
      );
  }
}

export default App;

