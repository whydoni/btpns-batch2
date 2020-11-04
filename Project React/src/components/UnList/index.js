import React, { Component } from 'react';
import { List } from "../List"
import "./style.css"


class UnList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ul>
                <List >Mengembalikan fungsi pemuda sebagai ujung tombak pembangunan bangsa</List>
                <List >Menciptakan ruang diskusi yang kritis antar kelompok dan lembaga</List>
                <List >Memperluas jaringan komunitas</List>
                <List >Meningkatkan kapasitas generasi muda terhadap parlemen</List>
            </ul>
         );
    }
}
 
export { UnList };