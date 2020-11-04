import React, { Component } from 'react';
import "./style.css"


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <li>
                {this.props.children}
            </li>
         );
    }
}
 
export { List };