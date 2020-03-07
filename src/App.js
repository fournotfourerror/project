import React,{Component} from 'react';
import './App.css';
import Resume from './Resume';
import {BrowserRouter, Route, Link}
from 'react-router-dom';
import Home from './Home';
class App extends Component{

render(){
  return(
  <div className="container">
  <BrowserRouter>
    <Route exact path="/" component={Home}>
    </Route>

    <Route exact path='/resume' component={Resume}>
    </Route>
  </BrowserRouter>

    
  </div>
  )
}
}


export default App;
