import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import chair1 from '../images/MainImages/chair1.jpg'
import chair2 from '../images/MainImages/chair2.jpg'
import chair3 from '../images/MainImages/chair3.jpg'
import MainCard from '../Main/MainCard'
const Chairs = () => {
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
          },
          
          {image:chair3,
            title:'Chair3',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price:'Rs 10,000'
          },
          
          {image:chair3,
            title:'Chair3',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price:'Rs 10,000'
          },
          
          {image:chair3,
            title:'Chair3',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price:'Rs 10,000'
          }
      ]
  return (
     <Box>
        <Typography variant='h5' sx={{textAlign:'center', borderBottom:'1px solid grey', marginTop:'20px', fontWeight:'bold'}}>Chairs</Typography>
    <Grid container spacing={2}>
   {
    chairs.map((bed)=>{
        return <MainCard width='250px' innerheight='200px' imageWidth='100%' image={bed.image} title={bed.title} desc={bed.description} price={bed.price}/>
    })
   }
    </Grid>
    </Box>
  )
}

export default Chairs