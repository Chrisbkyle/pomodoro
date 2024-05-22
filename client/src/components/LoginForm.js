import React, {useState, useEffect} from "react"
import axios from 'axios'
import usePomo from "./PomoContext";

const LoginForm = (props) => {

  const {displayUser, loginToggle} = usePomo()

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
      console.log(res.data)
      setActiveUser(res.data.username)
      displayUser(res.data)
      loginToggle(true)
    }).catch(err => {
      // setErrorMessage(err.response)
      console.log(err.response)
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
