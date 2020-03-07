import React,{Component} from 'react';
import Profile from './database/data.json';

let Resume=(param)=>{
    let profiles=Profile.profiles;
    let i;
    const name=Object.values(param.location.aboutProps)
    profiles.map((data,index)=>{
        if(profiles[index].basics.name==name){
            i=index;
        }
    })
    return(
        <div>
    {profiles[i].education.map((j)=>(
        <div>
        <li>{j.degree}</li>
    <p>{j.college}</p>
    <hr></hr>
    </div>
    ))}
        </div>
    )
}

export default Resume;