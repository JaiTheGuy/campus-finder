import React from 'react';
import logo from './logo.svg';
import './App.css';


class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }
   }

   render() { 
      return (
      )
   }
}

export default Table;