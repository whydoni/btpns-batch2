import React, { Component } from 'react';
import "./style.css"


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="nav-menu">
                {this.props.children}
            </div>
         );
    }
}
 
export default Menu;