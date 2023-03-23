import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
const Signup = () => {
  return (
    <Box className="form">
        <span className="form__title">Sign up</span>
        <form action="">
            <div className="form__input">
                <i className="ri-user-line"></i>
                <input type="text" placeholder="Name"/>
                <span className="bar"></span>
            </div>
            <div className="form__input">
                <i className="ri-mail-line"></i>
                <input type="text" placeholder="Email"/>
                <span className="bar"></span>
            </div>
            <div className="form__input">
                <i className="ri-lock-line"></i>
                <input type="text" placeholder="Password"/>
                <span className="bar"></span>
            </div>
            <div className="form__input">
                <i className="ri-lock-line"></i>
                <input type="text" placeholder="Confirm password"/>
                <span className="bar"></span>
            </div>
            <button type="submit" className="form__button">Sign up</button>
            <span className="form__switch">
                Already have an account? <Link to="/login">Login</Link>
            </span>
        </form>
    </Box>
  )
}

export default Signup