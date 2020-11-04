import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div className="home-container">
                    <div className="moto">
                        <h1>Moto Kami</h1>
                        <p>"Create an excellent generation of parliament"</p>
                        <h2>Kegiatan Kami :</h2>
                    </div>
                    <div className="image-container">
                        <h2>Audiensi dengan DPRD Kota Bogor</h2>
                        <img src={require('./kegiatan1.jpg')} />
                    </div>
                    <div className="image-container">
                        <h2>Reses DPRD Jawa Barat</h2>
                        <img src={require('./kegiatan3.jpeg')} />
                    </div>
                    <div className="image-container">
                        <h2>Virtual Talk dengan Anggota DPR Komisi X</h2>
                        <img src={require('./kegiatan2.jpeg')} />
                    </div>
                </div>
            </>
         );
    }
}
 
export default Home;