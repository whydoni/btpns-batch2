import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import "./style.css"
import { Home, About, Login, Regist, Users } from "../../pages"


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
            // admin: [{
            //     name: "Admin",
            //     username: "admin",
            //     email: "admin@mail.com",
            //     role: "admin"
            // }]
        }
    }

    // componentDidMount() {
    //     fetch('https://localhost:5000/users')
    //         .then(response => response.json())
    //         .then(json => this.props.doFetch(json))
    //             // const fetchData = json.map( user => ({
    //             //     ...user,
    //             //     password: "123",
    //             //     role: "user"
    //             // }))

    //             // this.setState({
    //             //     users: [...fetchData, ...this.state.admin]
    //             // })
    //         // })
    // }
    
    showPage = () => {
        const { statusLogin } = this.props

        // if (page === "home")
        //     return <Home />

        // if (page === "about")
        //     return <About />

        // if (page === "login")
        //     return <Login />

        // if (page === "register")
        //     return <Regist />

        return (
            <Switch>
                <Route exact path="/">
                    <Home statusLogin={statusLogin} />
                </Route>
                <Route path="/about" component={About} />
                <Route path="/users" component={Users} />
                <Route path="/login" component={Login}>
                    {/* <Login changeLogIn={changeLogIn} listUsers={this.state.users} /> */}
                </Route>
                <Route path="/register" component={Regist}>
                    <Regist listUsers={this.state.users} tambahUser={this.addUsers} />
                </Route>
            </Switch>
        )
    }

    addUsers = obj => {
        const { name, username, email, password } = obj
        let oldUsers = this.state.users
        oldUsers.push({
            name,
            username,
            email,
            password
        })
        this.setState({
            users: oldUsers
        })
    }

    render() {
        return (
            <>
                {
                    this.showPage()
                }
            </>
        );
    }
}
 
export default Body;