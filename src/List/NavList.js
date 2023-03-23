import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //  const items=[
  //   {
  //     name:'Beds',
  //     path:'/beds'
  //   },
  //   {
  //     name:'tabels',
  //     path:'/beds'
  //   },
  //   {
  //     name:'Sofas',
  //     path:'/beds'
  //   },
  //   {
  //     name:'Chairs',
  //     path:'/beds'
  //   },
  //  ]
  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="primary"
        disableElevation
        onClick={handleClick}
        // endIcon={<KeyboardArrowDownIcon />}
        sx={{marginTop:'13px', fontSize:'15px' }}
      >
        Options
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {/* { items.map((itm)=>{
          return <MenuItem component={Link} to={itm.path} onClick={handleClose} disableRipple>
               {itm.name}
           </MenuItem>
        }
        )
        } */}
        <MenuItem component={Link} to='/beds' onClick={handleClose} disableRipple>
         Beds
          {/* <Link to='/beds' style={{textDecoration:'none', color:'black'}} >Beds</Link> */}
        </MenuItem>
        <MenuItem component={Link} to='/sofas'  onClick={handleClose} disableRipple>
          Sofas
          {/* <Link to='/sofas' style={{textDecoration:'none', color:'black'}} >Sofas</Link> */}
        </MenuItem>
        <MenuItem component={Link} to='/tabels'  onClick={handleClose} disableRipple>
         Tabels
          {/* <Link to='/tabels' style={{textDecoration:'none', color:'black'}} >Tabels</Link> */}
        </MenuItem>
        <MenuItem component={Link} to='/chairs'  onClick={handleClose} disableRipple>
          Chairs
          {/* <Link to='/chairs' style={{textDecoration:'none', color:'black'}} >Chairs</Link> */}
        </MenuItem>
      </StyledMenu>
    </div>
  );
}