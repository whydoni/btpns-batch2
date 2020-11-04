import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { Menu } from "../../components"
import "./style.css"
// import { statusLogin } from "../../pages"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // shouldComponentUpdate(lastProp, nextProp) {
    //     console.log("props: ", this.props);
    //     console.log("lastProp: ", lastProp);
    //     if (lastProp.statusLogin !== this.props.statusLogin)
    //         return true
    //     return false
    // }

    render() { 
        return (
            <div className="nav-container">
                <Link to="/">
                    <Menu text="Beranda" 
                        // name="home" 
                        // goToPage={() => this.props.changePage("home")} 
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
 
const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch({ type: "LOGOUT" })
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)