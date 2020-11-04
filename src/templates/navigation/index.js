import React, { Component } from 'react';
import { Menu } from "../../components"
import "./style.css"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="nav-container">
                <Menu>Beranda</Menu>
                <Menu>Tentang</Menu>
                <Menu>Hubungi</Menu>
                <Menu>Dokumentasi</Menu>
                <Menu>Daftar</Menu>
            </div>
        );
    }
}
 
export default Nav;