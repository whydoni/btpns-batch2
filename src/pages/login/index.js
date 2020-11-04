import React, { Component } from 'react';
import { Input } from "../../components/input"
import { Label } from "../../components/label"
import "./style.css"



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div className="login-container">
                    <div className="body-title">Selamat Datang di komunitas Parlemenmuda.id</div>
                    <div className="body-content">
                        <div className="login-input">
                            <Label>Username</Label>
                            <Input type="text" placeholder="Username"/>
                            <Label>Password</Label>
                            <Input type="password" placeholder="Password"/>
                        </div>
                        <input className="input-login" type="button" value="Login"/>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Login;

