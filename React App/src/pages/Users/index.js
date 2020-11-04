import React, { Component } from 'react';
import "./style.css"


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // userList: []
         }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(json => this.setState({ userList: json }))
    // }

    // viewDetail = () => {
    //     alert(`
    //     ${users[1].address}
    //     ${users[1].address.geo}
    //     ${users[1].company}
    //     `)
    // }

    render() { 
        return ( 
            <div className="users-container">
                <table border="1" width="80%">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        {/* <th>Phone</th>
                        <th>Website</th> */}
                        <th>Aksi</th>
                        <th>Aksi</th>
                        <th>Aksi</th>
                    </tr>
                    {
                        // this.state.userList.map((user, idx) => {
                        //     return (
                        //         <tr key={idx}>
                        //             <td>{idx + 1}</td>
                        //             <td>{user.name}</td>
                        //             <td>{user.username}</td>
                        //             <td>{user.email}</td>
                        //             {/* <td>{user.phone}</td>
                        //             <td>{user.website}</td> */}
                        //             <td><button onClick={this.viewDetail}>view detail</button></td>
                        //             <td><button>Edit</button></td>
                        //             <td><button>Delete</button></td>
                        //         </tr>
                        //     ) 
                        // })
                    }
                </table>
            </div>
         );
    }
}
 
export default Users;