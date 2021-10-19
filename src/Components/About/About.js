import React from 'react';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <h5>MEDICAL EXCELLENCE, CARE</h5>
            <hr />
            <h1>What We Satnd For?</h1>
            <h1 className="text-danger">Our core values</h1>

            <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.</p>
        
            <div className="d-flex mt-5">
                <div className="border border-secondary">
                    <h1>DOCTOR YOU CHOOSE</h1>
                    <p>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications.</p>

                </div>

                <div className="border border-secondary mx-3">
                    <h1>EMERGENCY SERVICES</h1>
                    <p>Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply.</p>
                </div>

                <div className="border border-secondary mx-3">
                    <h1>ALWAYS THERE FOR YOU</h1>
                    <p>Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics.</p>
                </div>
            </div>
            <Footer></Footer>


        </div>
    );
};

export default About;