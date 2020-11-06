import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import { Input } from "../../components/input"
import { Label } from "../../components/label"
import "./style.css"
import {Redirect} from 'react-router-dom'
// import { DataUserList } from '../../components';

import { connect } from "react-redux"
class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            role: 2,
            dataUsers: []
         }
    }

    onChangeInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editData= async(dataEdit)=>{
        await fetch('http://localhost:5000/users/edit/'+dataEdit.email, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+this.props.dataLogin.token
            },
            body: JSON.stringify(dataEdit)
        })
        .then(response => response.json())
        .then(result => {
            window.alert(result.message)
        })
        .catch(error => console.log('error', error));
        this.fetchingData()
        console.log(dataEdit);
    }

    onEdit =  ()=> {
        const {name, username, password, role, email} = this.state
        const dataEdit = {name, username, password, role, email}
        this.editData(dataEdit);
        console.log(dataEdit);
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
                                        <td><button>Edit</button></td>
                                        <td><button onClick={()=> { if (window.confirm('Anda yakin?')) this.deleteUser(user.email) }}>Delete</button></td>
                                    </tr>
                                ) 
                            })
                        }
                    </tbody>
                </table>
                <div className="editInput">
                    <Label>Nama</Label>
                    <Input value={this.state.nama} name="name" type="text" placeholder="Nama" onChange={this.onChangeInput}/>
                    <Label>Username</Label>
                    <Input value={this.state.username} name="username" type="text" placeholder="Username" onChange={this.onChangeInput}/>
                    <Label>Email</Label>
                    <Input value={this.state.email} name="email" type="text" placeholder="Email" onChange={this.onChangeInput}/>
                    <Label>Password</Label>
                    <Input value={this.state.password} name="password" type="password" placeholder="Password" onChange={this.onChangeInput}/>
                    <Input type="button" value="Simpan" onClickInput={this.onEdit}/>
                </div>
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