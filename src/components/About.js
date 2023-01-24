import React, { Component } from 'react';
import aditya from './aditya-about.jpeg';
export default class About extends Component{
  render() {
    return (
      <div>
        <div className="card">
        <img src={aditya}  className="flex my-3 mx-2" alt="image" width={500} height={500}/>
        <div className="card-body">
            <h5 className="card-title">About-us</h5>
            <p className="card-text">Aditya raj is a React developer and coder, contact for website development of hire  
             as software developer or data analyst role..</p>
            <a href="resume.txt" className="btn btn-primary">Resume</a>
        </div> 
        </div>
      </div>
    )
  }
}
