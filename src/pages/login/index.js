import React, { Component } from 'react';
import { Input } from "../../components/input"
import { Label } from "../../components/label"
import "./style.css"



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            listUsers:[]
        }
    }
    
    onChangeInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onLogin = () => {
        const { username, password, listUsers } = this.state
        console.log(username, " : ", password);
        const dataUser = listUsers;
        // console.log(dataUser);

        if (username && password) {
            let statusLogin = false
            statusLogin = dataUser.find((data) => (data.username === username && data.password === password))
            if (statusLogin) {
                window.alert("Berhasil Login")
            } else {
                window.alert("Mohon cek username dan password")
            }
        }

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
 


export default Login;