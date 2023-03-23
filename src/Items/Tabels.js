import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import tabel1 from '../images/MainImages/tabel1.jpg'
import tabel2 from '../images/MainImages/tabel2.jpg'
import tabel3 from '../images/MainImages/tabel2.jpg'
import MainCard from '../Main/MainCard'
const Tabels = () => {
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
          },
          {image:tabel3,
            title:'tabel3',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price:'Rs 10,000'
          },
          {image:tabel3,
            title:'tabel3',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price:'Rs 10,000'
          },
          {image:tabel3,
            title:'tabel3',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price:'Rs 10,000'
          }
      ]
  return (
    <Box>
        <Typography variant='h5' sx={{textAlign:'center', borderBottom:'1px solid grey', marginTop:'20px', fontWeight:'bold'}}>Tabels</Typography>
    <Grid container spacing={2}>
   {
    tabels.map((bed)=>{
        return <MainCard width='250px' innerheight='200px' imageWidth='100%' image={bed.image} title={bed.title} desc={bed.description} price={bed.price}/>
    })
   }
    </Grid>
    </Box>
  )
}

export default Tabels