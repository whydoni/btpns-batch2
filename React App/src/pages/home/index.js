import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // redirect: true,
            users: []
        }
    }

    // clickBtn = () => {
    //     // this.props.history.push("/about")
    //     this.setState({
    //         redirect: true
    //     })
    // }

    render() { 
        if (!this.props.statusLogin)
            return <Redirect to="/login" />

        return ( 
            <>
                <div className="home-container">
                    <div className="moto">
                        {/* <button onClick={this.clickBtn}>Login</button> */}
                        <h1>Moto Kami</h1>
                        <p>"Create an excellent generation of parliament"</p>
                        <h2>Kegiatan Kami :</h2>
                    </div>
                    <div className="image-container">
                        <h2>Audiensi dengan DPRD Kota Bogor</h2>
                        <img alt="kegiatan1" src={require('./kegiatan1.jpg')} />
                    </div>
                    <div className="image-container">
                        <h2>Reses DPRD Jawa Barat</h2>
                        <img alt="kegiatan2" src={require('./kegiatan3.jpeg')} />
                    </div>
                    <div className="image-container">
                        <h2>Virtual Talk dengan Anggota DPR Komisi X</h2>
                        <img alt="kegiatan3" src={require('./kegiatan2.jpeg')} />
                    </div>
                </div>
            </>
         );
    }
}
 
const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn
})
 
export default connect(mapStateToProps)(Home)