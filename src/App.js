import React, { Component } from 'react';
import { Header, Nav, Body, Footer } from "./templates"
import "./App.css"
import {connect} from "react-redux"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // page: "home",
      isLoggedIn: false
    }
  }

  // shouldComponentUpdate(lastProp) {
  //   if (lastProp.page !== this.state.page)
  //     return true
  //   return false
  // }

  componentDidMount = async() =>{
    await fetch('http://localhost:5000/users')
        .then(response => response.json())
        .then(json => this.props.doFetch(json.users))
  }

  
  
  onClickButton = (page) => {
    this.setState({
      page
    })
  }

  // changeLogIn = () => {
  //   this.setState(oldState => ({ isLoggedIn: !oldState.isLoggedIn }))
  // }

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
          // statusLogin={this.state.isLoggedIn}
          // changeLogIn={this.changeLogIn}
          changePage={this.onClickButton}
        />
        <Body 
          statusLogin={this.state.isLoggedIn}
          // changeLogIn={this.changeLogIn}
          page={this.state.page}
          changePage={this.onClickButton}
          />
        <Footer />
      </>
    );
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  doFetch: (data) => dispatch({ type: "FETCH", payload: { dataUsers:data } }),
})
export default connect(null, mapDispatchToProps)(App);


// export default App;