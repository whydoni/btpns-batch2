import React, { Component } from 'react';
import { Header, Nav, Body, Footer } from "./templates"
import "./App.css"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      isLoggedIn: false
    }
  }

  
  
  onClickButton = (page) => {
    this.setState({
      page
    })
  }

  changeLogIn = () => {
    this.setState(oldState => ({ isLoggedIn: !oldState.isLoggedIn }))
  }

  doLogin = () => {
    this.setState({ isLoggedIn: true })
  }

  doLogout = () => {
    this.setState({ isLoggedIn: false })
  }
  
  render() {
    console.log(this.state.page)
    return (
      <>
        <Header />
        <Nav 
          statusLogin={this.state.isLoggedIn}
          changeLogIn={this.changeLogIn}
          changePage={this.onClickButton}
        />
        <Body 
          statusLogin={this.state.isLoggedIn}
          changeLogIn={this.changeLogIn}
          page={this.state.page}
          changePage={this.onClickButton}
          />
        <Footer />
      </>
    );
  }
}


export default App;