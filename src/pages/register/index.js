import React, { Component } from 'react';
import { Input } from "../../components/input"
import { Label } from "../../components/label"
import "./style.css"


let userList = [{
    nama: "admin",
    username: "admin1",
    email: "admin@mail.com",
    password: 123
}];

class Regist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama: "",
            username: "",
            email: "",
            password: ""
         }
    }


    onChangeInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onRegis = async () => {
        const { nama, username, email, password } = this.state
        // console.log(nama, username, email, password);
        
        let dataArray={
            nama: nama,
            username: username,
            email: email,
            password: password
        };
        let i = userList.length
        userList[i]=dataArray
        console.log(userList);

        this.setState({
            nama: "",
            username: "",
            email: "",
            password: "",
        })
        alert("Sukses Daftar")
    }

    render() { 
        return ( 
            <>
                <div className="login-container">
                    <div className="body-title">Selamat Bergabung dengan komunitas Parlemenmuda.id</div>
                    <div className="body-content">
                        <div className="regis-input">
                            <Label>Nama</Label>
                            <Input value={this.state.nama} name="nama" type="text" placeholder="Nama" onChange={this.onChangeInput}/>
                            <Label>Username</Label>
                            <Input value={this.state.username} name="username" type="text" placeholder="Username" onChange={this.onChangeInput}/>
                            <Label>Email</Label>
                            <Input value={this.state.email} name="email" type="text" placeholder="Email" onChange={this.onChangeInput}/>
                            <Label>Password</Label>
                            <Input value={this.state.password} name="password" type="password" placeholder="Password" onChange={this.onChangeInput}/>
                            <Input type="button" value="Daftar" onClickInput={this.onRegis}/>
                        </div>
                    </div>
                </div>
            </>
         );
    }
}
 


export { Regist };