import React, { Component } from 'react';
import { Label } from "../label"
import { Input } from "../input"
import "./style.css"


class LabelInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="label-input">
                <Label>Nama</Label>
                <Input type="text" placeholder="Nama"/>
                <Label>Username</Label>
                <Input type="text" placeholder="Username"/>
                <Label>Email</Label>
                <Input type="email" placeholder="Email"/>
                <Label>Password</Label>
                <Input type="password" placeholder="Ulangi Password"/>
            </div>
         );
    }
}
 
export {LabelInput};