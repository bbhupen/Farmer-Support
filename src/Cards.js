import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

export default function Cards() {
  return (
    <div className='row' style={{padding: "20px"}}>

<div className='col-sm-4'>
        <div className="card " style={{width: "18rem"}}>
        <img src={require("./images/rice.jpg")} className="card-img-top" alt="" />
        <div className="card-body">
            <p className="card-text">Search for a crop</p>
            <Link className="btn btn-primary" to="/search">Visit</Link>
        </div>
        </div>
        </div>
    
        <div className='col-sm-4'>
        <div className="card " style={{width: "18rem"}}>
        <img src={require("./images/crop1.jpg")} className="card-img-top" alt="" />
        <div className="card-body">
            <p className="card-text">Get a crop recommendation.</p>
            <Link className="btn btn-primary" to="/crop">Visit</Link>
        </div>
        </div>
        </div>
    

        <div className='col-sm-4'>
        <div className="card " style={{width: "18rem"}}>
        <img src={require("./images/fert3.jpg")} className="card-img-top" alt="" />
        <div className="card-body">
            <p className="card-text">Predict the best fertilizer for your farm.</p>
            <Link className="btn btn-primary" to="/fertilizer">Visit</Link>
        </div>
        </div>
        </div>
   
    
    </div>
  )
}
