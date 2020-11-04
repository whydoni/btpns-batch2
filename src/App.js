import React, { Component } from 'react';
import { Header, Nav, Body, Footer } from "./templates"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "login",
    }
  }

  
  render() { 
    return ( 
      <>
        <Header />
        <Nav />
        <Body />
        <Footer />
      </>
    );
  }
}
 
export default App;