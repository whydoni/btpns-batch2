import React, { Component } from 'react';
import "./style.css"


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userList: []
         }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ userList: json }))
    }


    render() { 
        return ( 
            <div className="users-container">
                <table border="1" width="80%">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Aksi</th>
                        <th>Aksi</th>
                        <th>Aksi</th>
                    </tr>
                    {
                        this.state.userList.map((user, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td><button>view detail</button></td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                            ) 
                        })
                    }
                </table>
            </div>
         );
    }
}
 
export default Users;