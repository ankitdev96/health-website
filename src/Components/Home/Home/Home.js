import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import News from '../News/News';
import {Doctors, servicesForHome} from './../../../data'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="mt-3">Welcome to our <span className="text-danger">Services</span></h1>
            <div className="container mt-3">
                {
                    servicesForHome.map((item) =>{
                        return(
                            <div className="card bg-danger" >
                                <img src={item.img} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.Name}</h5>
                                    <hr />
                                    <p className="card-text">{item.Detail}</p>
                                    <a href="#" className="btn btn-primary mt-3">FIND OUT MORE</a>
                                </div>
                            </div>
                        )
                    })

                    
                }

               
            </div>

            <h1 className="mt-5">Meet Our Best <span className="text-danger">Doctors</span></h1>
            <div className="container mt-3">
                {
                    Doctors.map((item) =>{
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
            <News></News>

           


            <Footer></Footer>
        </div>
    );
};

export default Home;