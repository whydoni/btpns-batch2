import React, { Component } from 'react';
import { Link } from "react-router-dom"
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
                <Link to="/">
                    <Menu text="Beranda" 
                        goToPage={() => this.props.changePage("home")} 
                    />
                </Link>
                <Link to="/about">
                    <Menu text="Tentang" goToPage={() => this.props.changePage("about")} />
                </Link>

                { this.props.statusLogin ?
                    <>
                    <Link to="/users">
                        <Menu text="Users" goToPage={() => this.props.changePage("users")} />
                    </Link>
                    <Menu text="Logout" goToPage={this.props.doLogout} />
                    </>
                    :
                    <>
                        <Link to="/login">
                            <Menu text="Login" goToPage={() => this.props.changePage("login")} />
                        </Link>
                        <Link to="/register">
                            <Menu text="Register" goToPage={() => this.props.changePage("register")} />
                        </Link>
                    </>
                }
                
            </div>
        );
    }
}

export default Nav;