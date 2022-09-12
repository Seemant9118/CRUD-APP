import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Home() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/user")
        setUsers(result.data)
        // setUsers(result.data.reverse())  -> to reverse data
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/user/${id}`)
        loadUsers()
    };

    return (
        <div className='container'>
            <div className='py-4'>
                <h1>Home Pages</h1>
                <table className="table border-shadow">
                    <thead className='thead text-white bg-dark '>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">title</th>
                            <th scope="col">body</th>
                            <th scope='col'>action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user , index) => (
                               <tr>
                               <th scope='row'>{index+1}</th>
                               <td>{user.title}</td>
                               <td>{user.body}</td>
                               <td>
                                   <Link className='btn btn-primary' to={`/users/UserView/${user.id}`}>View</Link>
                                   <Link className='btn btn-outline-primary' to={`/users/edit/${user.id}`}>Edit</Link>
                                   <Link className='btn btn-danger' to={''} onClick={() => deleteUser(user.id)}>Delete</Link>
                               </td>
                               
                               </tr>
                           ))
                       }
                    </tbody>
                </table>

            </div>



        </div>
    )
}



export default Home