import { signInWithRedirect } from '@firebase/auth';
import React from 'react';
import { useParams } from 'react-router';
import { services, servicesForHome } from '../../data';
import Services from '../Services/Services';

const Detail = () => {
   const params = useParams();
   console.log(params);
    return (
        <div>
            <h1>Welcome to this service.</h1>



        </div>
    );
};

export default Detail;