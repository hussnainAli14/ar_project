import {Card, Typography, Grid, Button, Modal, Box, TextField, IconButton, Alert } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import React,{useState,useContext} from 'react' 
import { userContext } from '../App';
import Check from './Check';
import { WindowScrollController } from '@fullcalendar/core/internal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height:'75vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display:{
    xs:'block',
    sm:'block',
    md:'flex'
  }
};
const MainCard = (props) => {
  const {state,dispatch}=useContext(userContext)
  //modal's states    
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const alertShow =()=> {
    // <Alert severity="error">This is an error alert — check it out!</Alert> 
    alert("Login To contine shopping!")
  }
  //add to cart 
  const [cartValue, setCartValue] = useState(0);
  
  return (
    // <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ width:props.width, border:'2px solid black', marginTop:'20px',marginBottom:'20px',marginLeft:{xs:'20%',sm:'12%',md:'20px'}}}>
    <Card sx={{height:props.innerheight}}>
        <img src={props.image} alt='loading' sx={{height:props.innerheight, width:props.imageWidth}} className='mainimg'/>
        
    </Card>
    <Typography sx={{textAlign:'center', fontWeight:'bold'}}>{props.title}</Typography>
    <Button variant='primary' onClick={()=>{
      (state==='none')?
      // <Alert severity="error">This is an error alert — check it out!</Alert>
      alertShow()
      :
      handleOpen()
      
      }} sx={{marginLeft:'60px'}}>View Details</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          
          <Card sx={{width:{xs:'40%',sm:'50%', md:'100%'}}}>
            <img src={props.image} alt='loading' style={{width:'100%', height:'100%'}}/>
          </Card>
          {/* <Divider style={{ background: 'black' }} variant="middle" /> */}
          <Box sx={{textAlign:'center',backgroundColor:'lightgrey', marginLeft:'20px'}}>
            <Typography sx={{marginTop:'20%', fontWeight:'bold', fontSize:'25px'}}>{props.title}</Typography><br/>
            <Typography>{props.desc}</Typography><br/>
            <Typography>Price: {props.price}</Typography><br/>
            <Typography>
            { 
            cartValue!==0?
            <IconButton sx={{cursor:'pointer'}}> 
              <RemoveIcon   onClick={()=>setCartValue(cartValue-1)}/>
             </IconButton>:
             <IconButton sx={{cursor:'pointer'}} disabled>
              <RemoveIcon />
             </IconButton>
             }
              <TextField value={cartValue} size='small' sx={{height:'-10px',width:'60px'}}/>
              
              <AddIcon sx={{cursor:'pointer'}}  onClick={()=>setCartValue(cartValue+1)}/>
              
            
            
            </Typography>
           {   cartValue!==0?<Button sx={{marginTop:'10%'}} variant="contained">Add to Cart</Button>:
           <Button disabled sx={{marginTop:'10%'}} variant="contained">Add to Cart</Button>
           }
            </Box>
            
        </Box>
      </Modal>
    </Card>
    </Grid>
        // </Grid>
  )
}

export default MainCard