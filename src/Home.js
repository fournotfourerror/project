import React from 'react';
import {BrowserRouter, Route, Link}
from 'react-router-dom';
import Profiles from './database/data.json';
import icon from './user.svg';
import Resume from './Resume';

let Home=()=>{
    const resumeInfo=Profiles.profiles;
    return(
        <div>
        <header className="heading"> Resume Building </header> <br></br>
      <section className="parent">
    <BrowserRouter>
    <Route exact path="/resume" component={Resume}>
    </Route>
    </BrowserRouter>
      {resumeInfo.map((p,index)=>(
        <div className="card" key={index}>
          <img src={icon} alt="profile icon"></img>
          <h2> {p.basics.name} </h2>
          <a href={"mailto:"+p.basics.email}> {p.basics.email} </a> <br></br>
        <a href={"Tel:"+p.basics.mobile}> {p.basics.mobile} </a>
          <Link to={{pathname:"/resume", aboutProps:{name:p.basics.name}}}
          className="btn"> View Profile</Link>
        </div>
      ))}
      </section>
      </div>
    )
  }

  export default Home;
  