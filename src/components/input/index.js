import React, { Component } from 'react';
import "./style.css"

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { type, name, value, onChange, onClickInput } = this.props
        return ( 
            <input
            type={type} 
            placeholder={this.props.placeholder} 
            value={value}
            name={name}
            onClick={onClickInput}
            onChange={onChange}
            />
         );
    }
}
 
export { Input };