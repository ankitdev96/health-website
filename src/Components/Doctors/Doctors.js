import React from 'react';
import {doctors} from './../../data'
import './Doctors.css'
const Doctors = () => {
    return (
        <div>
            <h1 className="mt-3">Our <span className="text-danger">Doctors</span></h1>
            <div className="container doctor-detail ms-5">
                {
                    doctors.map((item) =>{
                        return(
                            <div className="card" >
                                <img src={item.img} className="card-img-top" alt="..."/>
                                <div className="card-body bg-secondary">
                                    <h6 className="card-text">{item.post} </h6>
                                    <hr  />
                                    <h5 className="card-title">{item.Name}</h5>
                                    <p className="card-text">{item.details}</p>
                                    <a href="#" className="btn btn-primary mt-3">FIND OUT MORE</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Doctors;