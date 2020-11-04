import React, { Component } from 'react';
import "./style.css"
import { LabelInput } from "../../components/label-join-input"
import { About, Home, Login, Regist } from "../../pages"


class Body extends Component {
    
    showPage = () => {
        const { page } = this.props

        if (page === "home")
            return <Home />

        if (page === "about")
            return <About />

        if (page === "login")
            return <Login />

        if (page === "register")
            return <Register />
    }

    render() { 
        return ( 
            
            <>
            {/* <Home />             */}

            {/* <About /> */}

            <Login />

            {/* <Regist /> */}
            
            </>
         );
    }
}
 
export default Body;