import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import News from '../News/News';
import {doctors, servicesForHome} from './../../../data'
import './Home.css'

const Home = () => {
    const id = servicesForHome[0].id;
    // console.log(id);
    return (
        <div>
            <Banner></Banner>
            <h1 className="mt-3">Welcome to Top <span className="text-danger">Services</span></h1>
            
            <div className="container detail mt-3">
                {
                    servicesForHome.map((item) =>{

                        return(

                            <div className="card bg-danger" >
                                

                                <img src={item.img} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.Name}</h5>
                                    <hr />
                                    <p className="card-text">{item.Detail}</p>
                                    {/* <a href="#" className="btn btn-primary mt-3">FIND OUT MORE</a> */}
                                    <Link to={`/detail/${id}`}><button className="btn btn-primary mt-3" >FIND OUT MORE</button></Link>

                                </div>
                            </div>
                        )
                    })

                    
                }

               
            </div>

            <h1 className="mt-5">Meet Our Top <span className="text-danger">Doctors</span></h1>
            <div className="container detail mt-3">
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
            <News></News>

           


             <Footer></Footer> 
        </div>
    );
};

export default Home;