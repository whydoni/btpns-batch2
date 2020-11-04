import React, { Component } from 'react';
import "./style.css"

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <input className="input-field" type={this.props.type} placeholder={this.props.placeholder} value={this.props.value}/>
         );
    }
}
 
export { Input };