import React,{useContext} from 'react'
// import { useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../images/NavbarImages/logo1.png'
import { Badge, Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import NavList from '../List/NavList'
import { userContext } from '../App'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
// import { ConstructionOutlined } from '@mui/icons-material'
const Navbar = () => {
  // const [visible, setvisible] = useState(true)
  // const location = useLocation();
  const {state,disptach}=useContext(userContext)
  const navChanger=()=>{
    disptach({type:'none', payload:'none'})
  }
  return (
    <>
    {/* {(location.pathname!=='/dashboard'?setvisible(true):setvisible(false))}
    {visible? */}
    {/* {console.log(state)} */}
    {(state==='none')?
    <nav className="navbar navbar-expand-lg navbarbg">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/main">
      <img src={logo} alt="Logo" width="50" height="40" className="d-inline-block "/>
      SHOPPING.COM
    </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-contents" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <Link className="nav-link active p-3" aria-current="page" to="/main">Home</Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link active p-3" to='/about'>About Us</Link>
          </li>
        <li>
          <NavList/>
          </li>
        </ul>
        <div className='d-flex'> 
        <Button component={Link} to='/signup' variant="contained" >Register</Button>
        <Button component={Link} to='/login' variant="contained" className='ms-2'>Login</Button>
        
        </div>
      </div>
    </div>
  </nav>:
  (state==='user')?
  <nav className="navbar navbar-expand-lg navbarbg">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/main">
    <img src={logo} alt="Logo" width="50" height="40" className="d-inline-block "/>
    SHOPPING.COM
  </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbar-contents" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active p-3" aria-current="page" to="/main">Home</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link active p-3" to='/about'>About Us</Link>
        </li>
      <li>
        <NavList/>
        </li>
      </ul>
      <div className='d-flex'> 
      {/* <Button component={Link} to='/signup' variant="contained" >Register</Button>
       */}
       <IconButton>
        <Badge badgeContent={3} color='secondary'>
        <Link to='/cart' ><AddShoppingCartIcon/></Link>
        </Badge>
        </IconButton>
      {/* <Button component={Link} to='/main' variant="contained" className='ms-2'>Logout</Button> */}
      <IconButton>
        <Link to='/main' onClick={navChanger}>
          <LogoutIcon/>
        </Link>
      </IconButton>
      
      </div>
    </div>
  </div>
</nav>:
''
}
    </>
  )
}

export default Navbar