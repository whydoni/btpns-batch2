import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
// import { DataUserList } from '../../components';

import { connect } from "react-redux"
class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataUsers: []
         }
    }

    componentDidMount =() =>{
        fetch ('http://localhost:5000/users/all', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+this.props.dataLogin.token
            }
        })
        .then(response => response.json())
        .then(json => this.setState({
            dataUsers: json.data
        }))
     }
    fetchingData =() =>{
        fetch ('http://localhost:5000/users/all', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+this.props.dataLogin.token
            }
        })
        .then(response => response.json())
        .then(json => this.setState({
            dataUsers: json.data
        }))
     }


     deleteUser= (email) =>{
        fetch('http://localhost:5000/users/delete/'+email, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+this.props.dataLogin.token
            },
        })
        .then(response => response.json())
        .then(result => {
            window.alert(result.message)
        })
        .catch(error => console.log('error', error));
        this.fetchingData()
    }
    
    render() { 
        if (!this.props.statusLogin) {
            return <Redirect to="/login" />;
        }
        return ( 
            <div className="users-container">
                <table border="1" width="80%">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Aksi</th>
                            <th>Aksi</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.dataUsers.map((user, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td><button onClick={this.viewDetail}>view detail</button></td>
                                        <td><button>Edit</button></td>
                                        <td><button onClick={()=> { if (window.confirm('Anda yakin?')) this.deleteUser(user.email) }}>Delete</button></td>
                                    </tr>
                                ) 
                            })
                        }
                    </tbody>
                </table>
            </div>
         );
        
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn,
    dataLogin: state.auth.dataLogin,
    // dataUsers: state.data.dataUsers
})

const mapDispatchToProps = (dispatch) => ({
    doFetch: (data) => dispatch({ type: "FETCH", payload: { dataUsers:data } }),
  })
  
export default connect(mapStateToProps,mapDispatchToProps)(Users)

// import React, { Component } from 'react';
// import "./style.css"


// class Users extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             // userList: []
//          }
//     }

//     // componentDidMount() {
//     //     fetch('https://jsonplaceholder.typicode.com/users')
//     //         .then(response => response.json())
//     //         .then(json => this.setState({ userList: json }))
//     // }

//     // viewDetail = () => {
//     //     alert(`
//     //     ${users[1].address}
//     //     ${users[1].address.geo}
//     //     ${users[1].company}
//     //     `)
//     // }

//     render() { 
        
    
// }
 
// export default Users;