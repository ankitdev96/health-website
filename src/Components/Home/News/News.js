import React from 'react';

const News = () => {
    return (
        <div className="container d-flex justify-content-center border border-secondary mt-5">
            <div>
                <h1 className="mt-3">Medicare <span className="text-danger">Updates</span> </h1>
                <p>Read our latest news from the company or general medical news. 
                <br /> Feel free to ask questions in comments for any news you find interesting.</p>
            </div>

            <div>
               
               <button className="btn btn-primary btn-lg mt-5 rounded-pill">View All News</button>


            </div>

        </div>
    );
};

export default News;