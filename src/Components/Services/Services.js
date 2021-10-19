import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import {services} from './../../data'
import './Services.css'

const Services = () => {
    

    return (
        <div>
            <h1 className="mt-3">Welcome to Our <span className="text-danger">Services</span></h1>
            <div className="container service">
                {
                    services.map((item) => {
                        return(
                            
                                <div className="card bg-danger" >
                                    <img src={item.img} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.Name}</h5>
                                        <hr />
                                        <p className="card-text">{item.Detail}</p>
                                        {/* <a href="#" className="btn btn-primary mt-3">FIND OUT MORE</a> */}
                                        {/* <Link to={`/detail/${id}`}> */}
                                            {/* <button className="btn btn-primary mt-3" >FIND OUT MORE</button> */}
                                        {/* </Link> */}

                                    </div>
                                </div>
                            
                        )
                    })
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;