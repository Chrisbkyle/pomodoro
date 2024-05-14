import React, {useState, useEffect} from "react"
import axios from 'axios'

const LoginForm = (props) => {

  const api = 'http://localhost:3001/api'
  const [loginReq, setLoginReq] = useState({username: '', password: ''})
  const [showPassword, setShowPassword] = useState('password')
  const [activeUser, setActiveUser] = useState()
  const [errorMessage, setErrorMessage] = useState()

  const handleChange = (e) => {
    let data = {...loginReq}
    data[e.target.name] = e.target.value
    setLoginReq(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(api + '/user', loginReq)
    .then(res => { 
      setActiveUser(res.data.username)
    }).catch(err => {
      setErrorMessage(err.response.data)
      console.log(err.response.data)
    })
  }

  const handleToggle = (e) => {
    showPassword === 'password' ? setShowPassword('input') : setShowPassword('password')
  }



  return (
    <div>
      <form>
        <label name='username'>
          <input 
            name='username' 
            value={loginReq.username} 
            onChange={e => handleChange(e)} 
            placeholder='Username' required></input>
        </label>
        <label name='password'>
          <input 
            name='password' 
            value={loginReq.password} 
            onChange={e => handleChange(e)} 
            placeholder='Password' 
            type={showPassword}
            required
            ></input>
        </label>
        <label name='passwordToggle'>Show Password<input type='checkbox' name='passwordToggle' onChange={e => handleToggle(e)}></input></label>
        <button type='submit' onClick={e => handleSubmit(e)}>Submit</button>  
      </form>    
    </div>
  )
};

export default LoginForm
