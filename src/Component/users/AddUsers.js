import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AddUsers() {


    const [user, setUser] = useState({
        title: "",
        body: ""
    })
    const { title, body } = user

    const onInputChange = e => {
        // console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onClick = async _e => {

        await axios.post('http://localhost:3003/user', user)
        // console.log(user)

    }

    return (
        <div className='m-5 p-5 border shadow'>
            <h1 className='text-center'>Add Users</h1>
            <form >
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Enter Your Title</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="What your Title" name="title" value={title} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Enter Your Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='body' value={body} onChange={(e) => onInputChange(e)}></textarea>
                </div>
            </form>
            <Link className='btn btn-success w-100' onClick={_e => onClick()} to='/'>Add</Link>

        </div>
    )
}

export default AddUsers