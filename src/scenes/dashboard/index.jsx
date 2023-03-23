import React from 'react'
// import { Route, Routes} from 'react-router-dom'
import { ColorModeContext} from "../../theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
// import Topbar from '../global/Topbar';
import Sidebar from '../global/Sidebar';
// import { Outlet } from 'react-router-dom';
// import './dashboard.css'
// import Team from '../team/index';
const index = (props) => {
  // const [theme, colorMode]=useMode();
  return (
    <ColorModeContext.Provider value={props.colorMode}>
      <ThemeProvider theme={props.theme}>
        <CssBaseline />
    <div className='app'>
      <main className='content'>
        {/* <Topbar/> */}
        
        <Sidebar/>
        
        {/* <Routes>
        <Route path="/dashboard/team" element={<Team/>}/>
        </Routes> */}

    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default index