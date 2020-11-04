import React, { Component } from 'react';
import "./style.css"


class Label extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <label className="label-input">
                {this.props.children}
            </label>
         );
    }
}
 
export { Label };