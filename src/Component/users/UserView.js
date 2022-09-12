import React , {useState , useEffect} from 'react'
import {Link , useParams} from 'react-router-dom'
import axios  from 'axios'


function UserView() {
    const [user , setUsers] = useState({
        title: '',
        body : ''
    })

    const {id} = useParams()

    useEffect (() => {
        loadUser()
    },[])

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/user/${id}`)

        setUsers(res.data)
    }

   
    
  return (
      <div className='container py-4'>
      <Link className='btn btn-primary' to='/'>Back To Home</Link>
      <h1>User Id : {id}</h1>
      <hr/>
      <ul className='list-group w-50'>
            <li className='list-group-item'>Title : {user.title}</li>
            <li className='list-group-item'>Body : {user.body}</li>
      </ul>
      </div>
  )
}

export default UserView