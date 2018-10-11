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
      <div id="form">
      <MyForm submitHandler={this.submitHandler}/>
      </div>
      <div id="table">
      <Table  bookingData={this.state.bookings} />
      </div>
      
      
      </div>
    );
  }
}

export default App;
