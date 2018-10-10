import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import MyForm from './components/MyForm';
import Table from './components/Table';

class App extends Component {

  state={
    bookings:[]
  }

  submitHandler = booking =>{
    this.setState({
      bookings:[...this.state.bookings , booking]
    });
  }
  render() {
    return (
      <div className="App">
      <MyForm submitHandler={this.submitHandler}/>
      <Table  bookingData={this.state.bookings} />
      </div>
    );
  }
}

export default App;
