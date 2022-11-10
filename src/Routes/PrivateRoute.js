import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

import { Bars } from  'react-loader-spinner'
 
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
   
    if(loading){
        return <div className="grid justify-center items-center min-h-screen"><Bars
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /></div>
    }
 
    if(user && user?.email){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};


export default PrivateRoute;