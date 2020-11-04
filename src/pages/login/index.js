import React, { Component } from 'react';
import { connect } from "react-redux"
import { Input } from "../../components/input"
import { Label } from "../../components/label"
import "./style.css"
// import {Redirect} from "react-router-dom"



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
            // redirect: true
        }
    }
    
    onChangeInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onLogin = () => {
        const { username, password } = this.state
        console.log(username, " : ", password);
        // const dataUser = userList;
        // console.log(dataUser);

        const exist = this.props.userList.find((user) => user.username === username && password === 123)
        if (exist) {
            alert(`Welcome ${exist.name}!!`)
            this.props.doLogin(username)
            // this.props.changeLogIn()
            // console.log(statusLogin);
        } else alert("User undefined!!")

        // if (username && password) {
        //     let statusLogin = false
        //     statusLogin = dataUser.find((data) => (data.username == username && data.password == password))
        //     if (statusLogin) {
        //         window.alert("Berhasil Login")
        //     } else {
        //         window.alert("Mohon cek username dan password")
        //     }
        // }

        // this.setState({
        //     username: "",
        //     password: ""
        // })
    }

    render() { 
        return ( 
            <>
                <div className="login-container">
                    <div className="body-title">Selamat Datang di komunitas Parlemenmuda.id</div>
                    <div className="body-content">
                        <div className="login-input">
                            <Label>Username</Label>
                            <Input value={this.state.username} name="username" type="text" placeholder="Username" onChange={this.onChangeInput}/>
                            <Label>Password</Label>
                            <Input value={this.state.password} name="password" type="password" placeholder="Password" onChange={this.onChangeInput}/>
                            <Input type="button" value="Login" onClickInput={this.onLogin}/>
                        </div>
                    </div>
                </div>
            </>
         );
    }
}
 
const mapStateToProps = (state) => {
    console.log(state);
    return {
    statusLogin: state.auth.isLoggedIn,
    dataLogin: state.auth.dataLogin,
    userList : state.data.dataUsers,
}}

const mapDispatchToProps = (dispatch) => ({
    setDataUser:(data) => dispatch({
        type: "FETCH",
        payload: data
    }),
    doLogin: (dataLogin) => dispatch({ type: "LOGIN", payload: { dataLogin} })
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)