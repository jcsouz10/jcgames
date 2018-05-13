import React, { Component } from 'react';
import GamesSlides from './GamesSlides'
import Navbar from './Navbar';
import Games from './Games';
import Login from './Login';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      currentCar: 0,
      show: false      
    }
  }

  currentCar = () => {
    this.setState({
      currentCar: this.state.currentCar + 1, show: true
    })
    console.log(this.state.show)
  }

  showFalse = () =>{
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar currentCar={this.state.currentCar}/>
        <GamesSlides/>
        <Games showFalse={this.showFalse} currentCar={this.currentCar} show={this.state.show}/> 
        <Login/>
      </div>
    );
  }
}

export default App;
