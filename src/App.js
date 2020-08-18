import React from 'react';
import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path='/' component={Home}/> 
    <Route exact path='/rooms/' component={Rooms}/> 
    <Route exact path='/rooms/:slug' component={SingleRoom}/> 
    <Route component ={Error}/>
    </Switch>
    
    </>
  );
}
/// seting up all components
// making each page navigate to exact page
//adding switch component functionality
// create nav bar for each page i have
// install react icons
export default App;
