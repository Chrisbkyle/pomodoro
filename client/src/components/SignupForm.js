import React, {useState, useEffect} from "react"
import axios from 'axios'

const SignupForm = (props) => {

    const api = 'http://localhost:3001/api'
    const [userData, setUserData] = useState({username: '', password: '', confirmPassword: '', email: ''})
    const [errorMessage, setErrorMessage] = useState()

    const handleSubmit = (e) => {

        e.preventDefault();

        if (userData.password === userData.confirmPassword) {
            axios.post(api + '/add', userData)
            .then(res => {
                if(res.data === 'Signup Successful') {
                    console.log(res.data)
                } else {
                    console.log(res.data)
                }
            }).catch(err => {
                setErrorMessage(err.response.data)
                console.log(err.data)
            })
        } else {
            setErrorMessage('Passwords do not match')
            console.log('passwords don\'t match')
        }
    }

    const handleChange = (e) => {
        let data = {...userData}
        data[e.target.name] = e.target.value
        setUserData(data)
    }

  return (
    <div>
      <form>
        <label name='username'>
            <input 
            name='username' 
            type='text'
            value={userData.username} 
            onChange={e => handleChange(e)}
            placeholder='Enter Username'
            required></input>
        </label>
        <label name='password'>
            <input 
            name='password'
            type='password' 
            value={userData.password} 
            onChange={e => handleChange(e)}
            placeholder='Choose a Password'
            required></input>
        </label>
        <label name='confirmPassword'>
            <input 
            name='confirmPassword'
            type='password' 
            value={userData.confirmPassword}
            onChange={e => handleChange(e)}
            placeholder='Confirm Password'
            required></input>
        </label>
        <label name='email'>
            <input 
            name='email' 
            type='email'
            value={userData.email} 
            onChange={e => handleChange(e)}
            placeholder='Email'
            required></input>
        </label>
        <button type='submit' onClick={e => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
};

export default SignupForm
