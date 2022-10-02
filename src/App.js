import React from "react";
import './App.css';


import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Adminlog from "./Components/Adminlog";
import Login from './Components/Login';
import Registration from './Components/Registration';
import Navbar from "./Navbar";
import FirstPage from "./Components/FirstPage";

import Admin from "./Components/Admin";
import Customer from "./Components/Customer";
import AddItem from "./Components/AddItem";
import Itemlist from "./Components/Itemlist";
import Placeorder from "./Components/Placeorder";
import Showordertable from "./Components/Showordertable";
import Updateorder from "./Components/Updateorder";
import Vieworder from "./Components/Vieworders";
import vieworderbyadmin from "./Components/Vieworderbyadmin";
import Summary from "./Components/Summary";




function App() {
  
  return (
    <>
    
     <BrowserRouter>
        
    <Navbar/> 
     
        <Switch>
        
        <Route exact path="/" component={FirstPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/cregistration" component={Registration}/>
        <Route exact path="/adminlog" component={Adminlog}/>
        <Route exact path="/customerhome/:customer_id" component={Customer}/>
        <Route exact path="/adminhome" component={Admin}/>
        <Route exact path="/additem" component={AddItem}/>
        <Route exact path="/itemlist" component={Itemlist}/>
        <Route exact path="/placeorder/:customer_id" component={Placeorder}/>
        <Route exact path="/ordertable" component={Showordertable}/>
        <Route exact path="/updateorder/:order_id" component={Updateorder}/>
        <Route exact path="/vieworder/:order_id" component={Vieworder}/>
        <Route exact path="/adminhome/vieworderbyadmin/:order_id" component={vieworderbyadmin}/>
        <Route exact path="/adminhome/summary/:order_id" component={Summary}/>
        
        </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
