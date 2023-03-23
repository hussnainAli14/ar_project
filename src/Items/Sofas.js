import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import sofa1 from '../images/MainImages/sofa1.jpg'
import sofa2 from '../images/MainImages/sofa2.jpg'
import sofa3 from '../images/MainImages/sofa3.jpg'
import MainCard from '../Main/MainCard'
const Sofas = () => {
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
          },
          {image:sofa3,
            title:'Sofa3',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price:'Rs 10,000'
          },
          {image:sofa3,
            title:'Sofa3',
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
    <Box>
        <Typography variant='h5' sx={{textAlign:'center', borderBottom:'1px solid grey', marginTop:'20px', fontWeight:'bold'}}>Sofas</Typography>
    <Grid container spacing={3}>
   {
    sofas.map((bed)=>{
        return <MainCard width='250px' innerheight='200px' imageWidth='100%' image={bed.image} title={bed.title} desc={bed.description} price={bed.price}/>
    })
   }
    </Grid>
    </Box>
  )
}

export default Sofas