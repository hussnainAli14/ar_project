import {Box, Grid, Typography } from '@mui/material'
import React from 'react'
import MainCard from '../Main/MainCard'
import bed1 from '../images/MainImages/bed1.jpg'
import bed2 from '../images/MainImages/bed2.jpg'
import bed3 from '../images/MainImages/bed3.jpg'
const Beds = () => {
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
          
          },
          {image:bed3,
            title:'Bed3',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price:'Rs 10,000'
          
          },
          {image:bed3,
            title:'Bed3',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price:'Rs 10,000'
          
          },
          {image:bed3,
            title:'Bed3',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price:'Rs 10,000'
          
          }
      ]
  return (
    <Box>
      <Typography variant='h5' sx={{textAlign:'center', borderBottom:'1px solid grey', marginTop:'20px', fontWeight:'bold'}}>Beds</Typography>
    <Grid container spacing={2}>
   {
    beds.map((bed)=>{ 
      return <MainCard width='250px' innerheight='200px' imageWidth='100%' image={bed.image} title={bed.title} desc={bed.description} price={bed.price}/>
    })
   }
    </Grid>
    </Box>
  )
}

export default Beds