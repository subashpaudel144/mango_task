import React from 'react'
import './Login.scss'

function Login() {
    return (
        <div className='login'>
            <div className='ltitle'>
                <p>Login </p>
            </div>
            <div className='linput'>
                <input type="text" placeholder='enter username' /><br />
                <input type = "password" placeholder='enter password' />
            </div>
            <div className='lremember'>
                <input type="checkbox" value="remember me" />remember me
            </div>
            <div className='lbutton'>
                <button type='submit'>login</button>
            </div>
        </div>
    )
}

export default Login
