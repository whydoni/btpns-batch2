import React, { Component } from 'react';
import { LabelInput } from "../../components/label-join-input"


class Regist extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div className="login-container">
                    <div className="body-title">Selamat Bergabung dengan komunitas Parlemenmuda.id</div>
                    <div className="body-content">
                        <LabelInput />
                        <input type="button" value="Daftar"/>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Regist;