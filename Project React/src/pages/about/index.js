import React, { Component } from 'react';
import { UnList } from "../../components/UnList"


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div className="about-container">
                    <div className="about-tagline">Kami hadir dengan ikhtiar membawa kebaikan dan perbaikan untuk parlemen di masa depan</div>
                    <div className="about-visi">
                        <h4>Visi</h4>
                        <p>Terwujudnya generasi parlemen muda yang berakhlak mulia, berintelek, dan bertanggung jawab</p>
                    </div>
                    <div className="about-misi">
                        <h4>Misi</h4>
                        <UnList />
                    </div>
                </div>
            </>
         );
    }
}
 
export default About;