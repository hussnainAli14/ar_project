import React,{useContext} from 'react'
import { userContext } from '../App'
import { Box } from '@mui/material'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
// import { ConstructionOutlined } from '@mui/icons-material'
// import { Button } from 'bootstrap'
const Login = () => {
    const {state,dispatch}=useContext(userContext)
    const navigate = useNavigate();
    const navChanger=()=>{
        dispatch({type:'user', payload:'user'})
        navigate('/main');
        console.log('disya ay')
        console.log(state)
      }
  return (
    <Box className="form">
        
    <span className="form__title">Log In</span>
    <form onSubmit={navChanger}>
        <div className="form__input">
            <i className="ri-user-line"></i>
            <input type="email" placeholder="Email"/>
            <span className="bar"></span>
        </div>
        <div className="form__input">
            <i className="ri-mail-line"></i>
            <input type="password" placeholder="Password"/>
            <span className="bar"></span>
        </div>
        {/* <  className="form__button" onClick={navChanger}> */}
            <button type='submit' className="form__button"  style={{textDecoration:'none', color:'white'}}>
            Login
            
            </button>
            
            
        <span className="form__switch">
            Already have an account? <Link to='/signup'>Signup</Link>
        </span>
    </form>
    {console.log(state)}
</Box>

  )
}

export default Login