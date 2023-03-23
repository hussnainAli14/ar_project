import { Box, Typography,Button, TextField, Grid } from '@mui/material'
import React from 'react'
import './Main.css'
import MainCard from './MainCard'
import bed1 from '../images/MainImages/bed1.jpg'
import bed2 from '../images/MainImages/bed2.jpg'
import bed3 from '../images/MainImages/bed3.jpg'
import tabel1 from '../images/MainImages/tabel1.jpg'
import tabel2 from '../images/MainImages/tabel2.jpg'
import tabel3 from '../images/MainImages/tabel2.jpg'
import chair1 from '../images/MainImages/chair1.jpg'
import chair2 from '../images/MainImages/chair2.jpg'
import chair3 from '../images/MainImages/chair3.jpg'
import sofa1 from '../images/MainImages/sofa1.jpg'
import sofa2 from '../images/MainImages/sofa2.jpg'
import sofa3 from '../images/MainImages/sofa3.jpg'
import { Link } from 'react-router-dom'
const Main = () => {
  const beds=[
    {image:bed1,
    title:'Bed1',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price:'Rs 10,000'
    },
    {image:bed2,
      title:'Bed2',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price:'Rs 10,000'
    
    },
      {image:bed3,
        title:'Bed3',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price:'Rs 10,000'
      
      }
  ]
  const tabels=[
    {image:tabel1,
    title:'tabel1',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price:'Rs 10,000'
  },
    {image:tabel2,
      title:'tabel2',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price:'Rs 10,000'
    },
      {image:tabel3,
        title:'tabel3',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price:'Rs 10,000'
      }
  ]
  const chairs=[
    {image:chair1,
    title:'Chair1',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price:'Rs 10,000'
  },
    {image:chair2,
      title:'Chair2',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price:'Rs 10,000'
    },
      {image:chair3,
        title:'Chair3',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price:'Rs 10,000'
      }
  ]
  const sofas=[
    {image:sofa1,
    title:'Sofa1',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price:'Rs 10,000'
  },
    {image:sofa2,
      title:'Sofa2',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price:'Rs 10,000'
    },
      {image:sofa3,
        title:'Sofa3',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price:'Rs 10,000'
      }
  ]
  return (
    <>
    <Box className='main' sx={{minHeight:'450px', width:'100%', borderBottom:'1px solid grey'}}>
        <Typography 
        sx={
            {
        textAlign:'center', 
        letterSpacing:4,
         textTransform:'uppercase',
          fontSize:'22px' ,
          paddingTop:'50px'
          }
          }>
            Search the products of your liking
            </Typography>
            <Box sx={{display:{
                xs:'block',
                sm:'flex',
                md:'flex'
            },
            marginTop:'20px',
            justifyContent:{xs:'center',sm:'center', md:'center'}
            }}>
                
            <TextField type='text'placeholder='Search' size='small' sx={{marginLeft:{xs:'32%',sm:'0%'}}}/>
            <Button variant='contained' sx={{marginLeft:{xs:'40%',sm:'7px',md:'7px'}, borderRadius:'10px', marginTop:{xs:'10px',sm:'0%',md:'0%'}}}>Search</Button>
            </Box>
        </Box>
       <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid grey' ,padding:'15px'}}>
        <Typography sx={{fontWeight:'bold', fontSize:'24px'}}>Beds</Typography>
        <Link to='/beds'>See More</Link>
        </Box>
        <Box>
        <Grid container spacing={2} sx={{borderBottom:'1px solid grey'}}>
              {
                          
                beds.map((bed)=>{
                  
                 return <MainCard width='250px' innerheight='200px' image={bed.image} title={bed.title} desc={bed.description} price={bed.price} key={bed.title}/>
                 
                })
              }
        </Grid>
        </Box>
       
        <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid grey' ,padding:'15px'}}>
        <Typography sx={{fontWeight:'bold', fontSize:'24px'}}>Tabels</Typography>
        <Link to='/tabels'>See More</Link>
        </Box>
        <Box>
        <Grid container spacing={2} sx={{borderBottom:'1px solid grey'}}>
              {
                          
                tabels.map((bed)=>{
                  
                 return <MainCard width='250px' innerheight='200px' image={bed.image} title={bed.title} desc={bed.description} price={bed.price}/>
                 
                })
              }
        </Grid>
        </Box>

        <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid grey' ,padding:'15px'}}>
        <Typography sx={{fontWeight:'bold', fontSize:'24px'}}>Chairs</Typography>
        <Link to='/chairs'>See More</Link>
        </Box>
        <Box>
        <Grid container spacing={1} sx={{borderBottom:'1px solid grey'}}>
              {
                          
                chairs.map((bed)=>{
                  
                 return <MainCard width='250px' innerheight='200px' image={bed.image} title={bed.title} desc={bed.description} price={bed.price}/>
                 
                })
              }
        </Grid>
        </Box>

        <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid grey' ,padding:'15px'}}>
        <Typography sx={{fontWeight:'bold', fontSize:'24px'}}>Sofas</Typography>
        <Link to='/sofas'>See More</Link>
        </Box>
        <Box>
        <Grid container spacing={2} sx={{borderBottom:'1px solid grey'}}>
              {
                          
                sofas.map((bed)=>{
                  
                 return <MainCard width='250px' innerheight='200px' imageWidth='100%' image={bed.image} title={bed.title} desc={bed.description} price={bed.price}/>
                 
                })
              }
        </Grid>
        </Box>
        </>
  )
}

export default Main