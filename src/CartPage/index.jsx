import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Button, IconButton, Modal, TextField, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react' 
// import { margin } from '@mui/system';
// import Add from '@mui/icons-material/Add';
const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // height:'75vh',   
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:{
      xs:'block',
      sm:'block',
      md:'block'
    },
    textAlign:'center'
  };
const MyCart = () => {
//    const [isAddress, setAddress] = useState(false)
    const [open, setOpen]=useState(false)
    const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    // const [close, handleClose]=useState()
    const [cartValue, setcartValue] = useState(1)
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'Title',
          headerName: 'Title',
          width: 150,
          editable: true,
        },
        {
          field: 'Quantity',
          headerName: 'Quantity',
          type:'checkbox',
          width: 150,
          editable: true,
          renderCell:()=>{
            return(
                <Typography>
             <RemoveIcon sx={{cursor:'pointer', marginTop:'10px'}} onClick={()=>{setcartValue(cartValue-1)}}/>
             <TextField value={cartValue} size='small' sx={{width:'40px'}}/> 
             <AddIcon sx={{cursor:'pointer', marginTop:'10px'}} onClick={()=>{setcartValue(cartValue+1)}}/>
                </Typography>
            )
          }
        },
        {
          field: 'Price',
          headerName: 'Price',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'Remove',
          headerName: 'Remove',
         description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          editable:true,
        // <DeleteOutlineOutlinedIcon/>
        renderCell:()=>{
            return(
                <IconButton color="#212121" >
                <DeleteOutlineOutlinedIcon sx={{cursor:'pointer', marginLeft:'20px'}}/>
                </IconButton>
            )
        }
        }
          
      ];
      
      const rows = [
        { id: 1, Title: 'Snow', Quantity: 'Jon', Price: 35 },
        { id: 2, Title: 'Lannister', Quantity: 'Cersei', Price: 42 },
        { id: 3, Title: 'Lannister', Quantity: 'Jaime', Price: 45 },
        { id: 4, Title: 'Stark', Quantity: 'Arya', Price: 16 },
        { id: 5, Title: 'Targaryen', Quantity: 'Daenerys', Price: 100 },
        { id: 6, Title: 'Melisandre', Quantity: null, Price: 150 },
        { id: 7, Title: 'Clifford', Quantity: 'Ferrara', Price: 44 },
        { id: 8, Title: 'Frances', Quantity: 'Rossini', Price: 36 },
        { id: 9, Title: 'Roxie', Quantity: 'Harvey', Price: 65 },
      ];
  return (
    <Box>
        <Typography variant='h5' mt='20px' mb='20px'textAlign='center' fontFamily='sans-serif'>
       <ShoppingCartOutlinedIcon />     My Cart
        </Typography>
    <Box sx={{ height: 400, width: '70%', margin:'0 auto', border:'1px solid black'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      <Typography>
        <TextField size='large' label='Address' sx={{marginTop:'10px', width:'100%'}} />
        <Button variant='contained' onClick={handleOpen} sx={{ marginTop:'20px' , marginLeft:'40%' }}>
            Place My Order
        </Button>
        <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
        >
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Confirm Order
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Are you sure want to place this order?
    </Typography>
    <Box sx={{marginTop:'20px', marginLeft:'30%',display:{xs:'block', sm:'block', md:'flex'} ,alignItems:'center'}}>
    <Button variant='contained' sx={{marginRight:'10px'}} >
        Yes
    </Button>
    <Button variant='contained' onClick={handleClose}>
        No
    </Button>
    </Box>
  </Box>
</Modal>
    </Typography>
    </Box>
    
    </Box>
  )
}

export default MyCart