import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import '../App.css';
import Rooms from './pages/Rooms';
import Home from './pages/Home';
import SingleRoom from './SingleRoom';
import Error from './pages/Error';
import NavBar from './NavBar';

const App=()=>{
    return (
    <div>
       <BrowserRouter>
           <>
               <NavBar></NavBar>
               <Switch>
                   <Route path="/" exact component={Home}/>
                   <Route path="/Rooms" exact component={Rooms}/>
                   <Route path="/SingleRoom/:slug" exact component={SingleRoom}/>
                   <Route  component={Error}/>
               </Switch>
           </>
       </BrowserRouter>
    </div>
    );
};

export default App;