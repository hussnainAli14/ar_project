import { createContext,useReducer } from "react";
import { useMode } from "./theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Login from "./SignupLogin/Login";
import {Route, Routes} from 'react-router-dom'
import Signup from "./SignupLogin/Signup";
import AboutUs from "./AboutUs/AboutUs";
import Beds from "./Items/Beds";
import Chairs from "./Items/Chairs";
import Tabels from "./Items/Tabels";
import Sofas from "./Items/Sofas";
import ViewDetails from "./Details/ViewDetails";
//dashboard
import Dashboard from '../src/scenes/dashboard/index';
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Item from "./scenes/form/addItem";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Dashboard1 from './scenes/dashboard/dashboard'
import DeleteItem from "./scenes/deleteItem/deleteItem";
import MyCart from "./CartPage";
import { initialState,reducer } from "./reducer/UseReducer";

export const userContext= createContext();

function App() {
  const [theme, colorMode]=useMode();
  const [state,dispatch]= useReducer(reducer,initialState);
  return (
   <>
      <userContext.Provider value={{state,dispatch}}>
      <Navbar/>
    
      <Routes>
        <Route index element={<Main/>}/>
        <Route path='/main' element={<Main/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path="/beds" element={<Beds/>}/>
        <Route path="/chairs" element={<Chairs/>}/>
        <Route path="/tabels" element={<Tabels/>}/>
        <Route path="/sofas" element={<Sofas/>}/>
        <Route path='/viewdetails' element={<ViewDetails/>} />
        <Route path="/dashboard/" element={<Dashboard theme={theme} colorMode={colorMode} />}>
        <Route path="team" element={<Team/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="form" element={<Form/>}/>
        <Route path="item" element={<Item/>}/>
        <Route path="faq" element={<FAQ/>}/>
        <Route path="bar" element={<Bar/>}/>
        <Route path="pie" element={<Pie/>}/>
        <Route path="delete" element={<DeleteItem/>}/>
        <Route path="dashboard1" element={<Dashboard1/>}/>
        </Route>
       <Route path="/cart" element={<MyCart/>}/>
        {/* <Route path="/team" element={<Team/>}/> */}
        
              
</Routes>
{/* {console.log(state)} */}
</userContext.Provider>
</>
    
  );
}

export default App;
